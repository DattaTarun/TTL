import React from "react";

const Notifications = () => {
  const notifications = [
    {
      date: "Today",
      items: [
        {
          id: 1,
          text: "{UserXYZ} has invited you to collaborate on their project 'PhD Project Monitoring System'.",
          actionText: "Tap to View",
        },
      ],
    },
    {
      date: "Yesterday",
      items: [
        {
          id: 2,
          text: "{UserXYZ} has sent you a connect request.",
          isConnectRequest: true, // Indicates this has tick/cross actions
        },
        {
          id: 3,
          text: "{UserXYZ} has invited you to join their hackathon team for Hacklipse 5.0.",
          actionText: "Tap to view details",
        },
      ],
    },
    {
      date: "Last Week",
      items: [
        { id: 4, text: "{UserXYZ} has sent you a connect request.", isConnectRequest: true },
        { id: 5, text: "{UserXYZ} has sent you a connect request.", isConnectRequest: true },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-[Montserrat]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[35px] font-normal leading-[42.67px] text-[rgba(100,0,0,1)]">
          Notifications
        </h1>

        {/* Dropdown and Filters */}
        <div className="flex items-center space-x-4">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700"
            defaultValue="All Notifications"
          >
            <option value="All Notifications">All Notifications</option>
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
          </select>

          <button className="px-4 py-2 bg-[rgba(100,0,0,1)] text-white rounded-lg hover:bg-[rgba(80,0,0,1)] transition duration-200">
            Filters
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notifications.map((group) => (
        <div key={group.date} className="mb-6">
          {/* Date Group Header */}
          <h2 className="text-lg font-semibold text-[rgba(100,0,0,1)] mb-4">{group.date}</h2>

          {/* Notification Items */}
          {group.items.map((notification) => (
            <div
              key={notification.id}
              className="bg-[rgba(100,0,0,1)] text-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
            >
              <p className="text-sm">
                {notification.text}{" "}
                {notification.actionText && (
                  <span className="text-yellow-300 underline hover:text-yellow-400 cursor-pointer">
                    {notification.actionText}
                  </span>
                )}
              </p>

              {/* Accept/Decline Buttons for Connect Requests */}
              {notification.isConnectRequest && (
                <div className="flex space-x-2">
                  <button className="text-green-500 bg-white p-2 rounded-full hover:bg-green-100">
                    ✔
                  </button>
                  <button className="text-red-500 bg-white p-2 rounded-full hover:bg-red-100">
                    ✖
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
