import React from "react";

const DocumentCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <span className="text-xs font-semibold uppercase text-orange-500">
          Personal
        </span>
        <h2 className="mt-2 text-lg font-semibold text-gray-800">
          Document Images
        </h2>
        <p className="text-sm text-gray-600">
          Report Document of Weekly Meetings
        </p>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <img
            src="/Note.png"
            alt="Cameron Williamson"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="ml-3 text-sm font-medium text-gray-700">
            Cameron Williamson
          </span>
        </div>
        <span className="text-xs text-gray-500">Dec 30 21:28</span>
      </div>
    </div>
  );
};

export default DocumentCard;
