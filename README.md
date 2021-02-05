# rnn-your-friends

Train a text model on your iMessages. Talks to my [textgenrnn API](https://github.com/jkatofsky/textgenrnn-api).

## TODOs

- [ ] Make a proper README.
- [ ] [Buy Me A Coffee](https://www.buymeacoffee.com/) instead of current buttons?
- [ ] Disallow newlines in the prompt box.
- [ ] Rethink data flow of the application (i.e. all the callbacks that pass data back to the `Body` component - which is the defacto state manager).
- [ ] Revisit deploy process
  - Why can't I deploy the build folder directly to App Engine, given the right `app.yaml` and `gcloudignore`?
  - Figure out login issue when running `gcloud app deploy` on remote.
- [ ] Query for a number of training characters/words, not a number of messages!
- [ ] Force HTTPS.
- [ ] Make site sections collapse, or have different tabs. Basially, make it feel more like a SPA. Also would help the site to feel good on mobile, even if they can't use it.
- [ ] View on multiple sizes of monitors and tweak sizing/margins.
- [ ] Custom GitHub buttons -> Material UI.
- [ ] Remember who's been trained using local storage?
- [ ] Investigate error upon a second DB upload.
- [ ] Rewrite a lot of my `setState`s. The function can take a function as an argument (good for setting `modelID`) or an object with a variable name only.
- [ ] Use Material UI more comprehensively:
  - Theming/styling (can then use `disabled` prop to get rid of hacky CSS?)
  - [Typography](https://material-ui.com/components/typography/) component.
  - [Paper](https://material-ui.com/components/paper/#paper) component.
- [ ] Make loading circle block the entire app, using [Backdrop](https://material-ui.com/components/backdrop/#backdrop)?
- [ ] Search bar for handles, to get rid of Command-F.
- [ ] Add following fields to the handle objects on the front-end: `messageCount` & `lastMessagedTime`.
  - Only add handles with a minimum number of messages to the handles list in Upload.
  - Turn list into a table, with columns for sorting on `messageCount` and `lastMessagedTime`.
  - Change text in the Train component to reflect these changes.
- [ ] Don't train on reaction messages.
- [ ] Do train on messages from given handle that come from group chats.
- [ ] Training option: most recent messages vs. random messages?
- [ ] How to allow someone to train on their own messages (right now, doesn't choose messages where `is_from_me` is truthy in DB, but we want to let people train on themselves).
- [ ] Investigate why there's duplicates in the handles list.
- [ ] Tweak the  message bubbles - text formatting/dimensions.
- [ ] Add material icons to footer?
- [ ] Unified way of error handling - try-catches and callbacks to `Body` w/ error state that renders [Snackbar](https://material-ui.com/components/snackbars/#snackbar) with custom message?
- [ ] Think of ways to make output shareable.
- [ ] Is there an way to easily attatch names with the handles? That data [lives somewhere else](https://apple.stackexchange.com/questions/321521/can-i-access-contact-names-in-chat-db).
  - Prompt user to upload contacts database as well?
  - Provide feature to rename a handle on the front-end? `onHandleRename` in `Train` => sets the name in `Body`.
- [ ] Long term idea: make it more of a chatbot (would require a much smarter backend).
- [ ] Just have a popup saying that it won't work if not on macOS, instead of disabling `Body`?