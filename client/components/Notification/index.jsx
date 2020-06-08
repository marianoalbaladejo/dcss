import hash from 'object-hash';
import { SemanticToastContainer as Notification, toast } from 'react-semantic-toasts';
import './Notification.css';

export default Notification;

const cache = new Set();

export function notify({
  color,
  icon = '',
  message = '',
  size = 'tiny',
  time = 2000,
  type = 'info'
}) {
  const description = message;
  const props = {
    description,
    icon,
    size,
    time,
    type
  };

  if (color) {
    props.color = color;
    props.type = undefined;
  }

  if (type === 'warn') {
    props.color = 'orange';
    props.type = undefined;
  }

  const key = hash(props);

  if (!cache.has(key)) {
    cache.add(key);
    toast(props, () => {
      cache.delete(key);
    });
  }
}
