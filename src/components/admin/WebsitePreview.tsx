"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, X, RefreshCw, ExternalLink } from "lucide-react";

type DeviceType = "desktop" | "tablet" | "mobile";

interface WebsitePreviewProps {
  url: string;
  title?: string;
}

export default function WebsitePreview({ url, title = "Live Preview" }: WebsitePreviewProps) {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deviceSizes = {
    desktop: { width: "100%", height: "600px" },
    tablet: { width: "768px", height: "600px" },
    mobile: { width: "375px", height: "600px" },
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
      >
        <Monitor size={18} />
        <span>Preview</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3">
                <Monitor size={20} className="text-gray-600" />
                <h3 className="font-bold text-gray-900">{title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
                  title="Refresh"
                >
                  <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Device Selector */}
            <div className="flex items-center justify-center gap-2 p-4 border-b border-gray-100 bg-gray-50">
              {(["desktop", "tablet", "mobile"] as DeviceType[]).map((deviceType) => {
                const Icon = deviceType === "desktop" ? Monitor : deviceType === "tablet" ? Tablet : Smartphone;
                return (
                  <button
                    key={deviceType}
                    onClick={() => setDevice(deviceType)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      device === deviceType
                        ? "bg-maroon-900 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-semibold capitalize">{deviceType}</span>
                  </button>
                );
              })}
            </div>

            {/* Preview Frame */}
            <div className="flex items-center justify-center p-6 bg-gray-100 min-h-[700px]">
              <motion.div
                key={device}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-2xl overflow-hidden"
                style={{
                  width: deviceSizes[device].width,
                  height: deviceSizes[device].height,
                  maxWidth: "100%",
                }}
              >
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <div className="w-8 h-8 border-4 border-maroon-700 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <iframe
                    src={url}
                    className="w-full h-full border-0"
                    title="Website Preview"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                )}
              </motion.div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
              <span>Previewing: {url}</span>
              <span className="flex items-center gap-1">
                <Monitor size={14} />
                {device.charAt(0).toUpperCase() + device.slice(1)} view
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
