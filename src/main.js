var TOKEN   = PropertiesService.getScriptProperties().getProperty("TOKEN");
var CHANNEL = PropertiesService.getScriptProperties().getProperty("CHANNEL");

function main() {
  const baseUrl = 'https://slack.com/api/channels.history';
  const baseParameters = [
    'token=' + TOKEN,
    'channel=' + CHANNEL,
    'count=1000',
  ];

  var messages = [];
  var latestMessage = '';
  do {
    var parameters = baseParameters.concat([latestMessage]).join('&');
    var res = fetchSlackChannelMessages(baseUrl + '?' + parameters);
    var newMessages = res.messages
      .filter(function (v) {
        return !('thread_ts' in v) || v.ts === v.thread_ts;
      }).map(function (v) {
        return [
          v.client_msg_id,
          v.type,
          v.text,
          v.user,
          v.ts,
          v.reply_count || 0,
          v.reply_users_count || 0,
        ];
      });
    messages = messages.concat(newMessages);
    latestMessage = 'latest=' + res.messages[res.messages.length-1].ts;
  } while (res.has_more);

  SpreadsheetApp
    .getActiveSheet()
    .getRange('A2:G' + (messages.length+1))
    .setValues(messages);
}

function fetchSlackChannelMessages(url) {
  const res = UrlFetchApp.fetch(url, {
    method: 'GET',
    headers: { "Content-Type": 'application/json' }
  });
  return JSON.parse(res);
}
