import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

const Index_notification = () => {
  useEffect(() => {
    // قم بتكوين Pusher
    const pusher = new Pusher('1d2ff5d4a1d55337452c', {
      cluster: 'us2',
    });

    // الاشتراك في قناة
    const channel = pusher.subscribe('channel-name');

    // الاستماع إلى الأحداث
    channel.bind('TestNotification', function(data) {
    //   alert(console.log('dddddddddddd'));
      alert(JSON.stringify(data));
    });

    // تنظيف الاتصال عند إلغاء التثبيت
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {/* <h1>Pusher Notification</h1> */}
    </div>
  );
}

export default Index_notification;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// import React, { useEffect, useState } from 'react';
// import Pusher from 'pusher-js';
// import { GET_ALL_MANAGERS } from '../../modules/Pages/Management/services';

// const Index_notification = () => {
//   const [managers, setManagers] = useState([]);

//   useEffect(() => {
//     // تكوين Pusher (يمكنك الإبقاء على Pusher إذا كنت تحتاجه لأشياء أخرى)
//     const pusher = new Pusher('1d2ff5d4a1d55337452c', {
//       cluster: 'us2',
//     });

//     // الاشتراك في القناة
//     const channel = pusher.subscribe('channel-name');

//     // الاستماع إلى الأحداث
//     channel.bind('TestNotification', function(data) {
//       console.log('Received Pusher event:', data);
//       alert('New Pusher Notification: ' + JSON.stringify(data));
//     });

//     // استدعاء دالة API لجلب جميع المديرين
//     GET_ALL_MANAGERS()
//       .then(response => {
//         setManagers(response.data?.managers);  // تخزين البيانات في الحالة
//         alert('Data fetched successfully!');  // عرض إشعار عند نجاح جلب البيانات
//         console.log('Managers:', response.data.managers);
//       })
//       .catch(error => {
//         console.error('Error fetching managers:', error);
//         alert('Failed to fetch data');
//       });

//     // تنظيف الاتصال عند إلغاء التثبيت
//     return () => {
//       channel.unbind_all();
//       channel.unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="App">
//       {/* يمكنك هنا عرض البيانات كما ترغب */}
//     </div>
//   );
// }

// export default Index_notification;
