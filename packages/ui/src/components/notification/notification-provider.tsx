import { useNotification } from '@/hooks/use-notification';
import { Notification } from '@/lib/components';

const NotificationProvider = () => {
  const { notifications } = useNotification();

  return (
    <Notification.Provider>
      {notifications.map(({ id, ...rest }) => {
        return <Notification.Root key={id} {...rest} />;
      })}
      <Notification.Viewport />
    </Notification.Provider>
  );
};

export { NotificationProvider };
