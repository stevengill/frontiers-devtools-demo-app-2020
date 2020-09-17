const { App, LogLevel } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,

  // logLevel: LogLevel.DEBUG,

  // OAuth Related options
  // clientId: process.env.CLIENT_ID,
  // clientSecret: process.env.CLIENT_SECRET,
  // stateSecret: 'my-state-secret',
  // scopes: ['channels:read', 'chat:write', 'app_mentions:read', 'channels:manage', 'commands', 'links:write'],

});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

// subscribe to 'app_mention' event in your App config
// need app_mentions:read and chat:write scopes
// app.event('app_mention', async ({ event, client }) => {
//   try {
//     // directly call the api method 'chat.postMessage'
//     const result = await client.chat.postMessage({
//       channel: event.channel,
//       text: `Thanks for the mention, <@${event.user}>!`
//     });
//   }
//   catch (error) {
//     console.error(error);
//   }
// });

// subscribe to `message.channels` event in your App Config
// need channels:history scope
// app.message('hello', async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   // no need to directly use 'chat.postMessage', no need to include token
//   await say({"blocks": [
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": `Thanks for the mention <@${message.user}>! Click my fancy button`
// 			},
// 			"accessory": {
// 				"type": "button",
// 				"text": {
// 					"type": "plain_text",
// 					"text": "Button",
// 					"emoji": true
// 				},
//         "value": "click_me_123",
//         "action_id": "first_button"
// 			}
// 		}
// 	]});
// });

// Listen and respond to button click
// app.action('first_button', async({action, ack, say}) => {
//   // acknowledge the request right away
//   await ack();
//   await say('Thanks for clicking the fancy button');
// });

// setup shortcut in your App config page
// add commands permission
// app.shortcut('launch_shortcut', async ({ shortcut, ack, client }) => {
//   try {
//     // Acknowledge shortcut request
//     await ack();

//     // Call the views.open method using one of the built-in WebClients
//     const result = await client.views.open({
//       // The token you used to initialize your app is stored in the `context` object
//       trigger_id: shortcut.trigger_id,
//       view: {
//         type: "modal",
//         title: {
//           type: "plain_text",
//           text: "My App"
//         },
//         close: {
//           type: "plain_text",
//           text: "Close"
//         },
//         blocks: [
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: "About the simplest modal you could conceive of :smile:\n\nMaybe <https://api.slack.com/reference/block-kit/interactive-components|*make the modal interactive*> or <https://api.slack.com/surfaces/modals/using#modifying|*learn more advanced modal use cases*>."
//             }
//           },
//           {
//             type: "context",
//             elements: [
//               {
//                 type: "mrkdwn",
//                 text: "Psssst this modal was designed using <https://api.slack.com/tools/block-kit-builder|*Block Kit Builder*>"
//               }
//             ]
//           }
//         ]
//       }
//     });
//   }
//   catch (error) { 
//     console.error(error);
//   }
// });

// app home demo
// subscribe to app_home_opened event
// app.event('app_home_opened', async ({ event, context, client }) => {
//   try {
//     if (event.tab === 'home') {
//       const result = await client.views.publish({
//         user_id: event.user,
//         view: { 
//           "type":"home",
//           "blocks":[ 
//             { 
//               "type":"section",
//               "text":{ 
//                 "type":"mrkdwn",
//                 "text":"A simple stack of blocks for the simple sample Block Kit Home tab."
//               }
//             },
//             { 
//               "type":"actions",
//               "elements":[ 
//                 { 
//                   "type":"button",
//                   "text":{ 
//                     "type":"plain_text",
//                     "text":"Action A",
//                     "emoji":true
//                   }
//                 },
//                 { 
//                   "type":"button",
//                   "text":{ 
//                     "type":"plain_text",
//                     "text":"Action B",
//                     "emoji":true
//                   }
//                 }
//               ]
//             }
//           ]
//        },
//       });
//       console.log(result);
//     }
//   }
//   catch (error) {
//     console.error(error);
//   }
// });
