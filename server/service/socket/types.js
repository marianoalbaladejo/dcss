// Note: this file is used by <root>/client/hoc/withSocket.jsx

// Client -> Server
exports.AGENT_JOINED = 'agent-joined';
exports.CREATE_CHAT_CHANNEL = 'create-chat-channel';
exports.CREATE_CHAT_SLIDE_CHANNEL = 'create-chat-slide-channel';
exports.CREATE_COHORT_CHANNEL = 'create-cohort-channel';
exports.CREATE_USER_CHANNEL = 'create-user-channel';
exports.DISCONNECT = 'disconnect';
exports.HEART_BEAT = 'heart-beat';
exports.USER_JOIN = 'user-join';
exports.USER_PART = 'user-part';
exports.USER_JOIN_SLIDE = 'user-join-slide';
exports.USER_PART_SLIDE = 'user-part-slide';
exports.USER_IS_TYPING = 'user-is-typing';
exports.USER_NOT_TYPING = 'user-not-typing';

// Client <- Server
exports.NEW_INVITATION = 'new-invitation';
exports.SET_INVITATION = 'set-invitation';
exports.NOTIFICATION = 'notification';

// Server -> Client
exports.CHAT_CREATED = 'chat-created';
exports.CHAT_ENDED = 'chat-ended';
exports.JOIN_OR_PART = 'join-or-part';
exports.RUN_CHAT_LINK = 'run-chat-link';
// exports.AGENT_ADDED = 'agent-added';
// exports.USER_ADDED = 'user-added';
// exports.USER_REMOVED = 'user-removed';

// Client -> Server -> Client
exports.CHAT_CLOSED_FOR_SLIDE = 'chat-closed-for-slide';
exports.CHAT_MESSAGE_CREATED = 'chat-message-created';
exports.CHAT_MESSAGE_UPDATED = 'chat-message-updated';
exports.TIMER_END = 'timer-end';
exports.TIMER_START = 'timer-start';
exports.TIMER_STOP = 'timer-stop';
exports.TIMER_TICK = 'timer-tick';
