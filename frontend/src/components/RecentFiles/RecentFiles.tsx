/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import FileList from "../File/FileList";
import { useGDrive } from "@/context/GoogleDriveContext";
import FileSkeleton from "../skeleton/FileSkeleton";

const RecentFiles = () => {
  const [data, setData] = React.useState<IFile[] | null>(null);
  const { getRecentsFiles, isSignedIn } = useGDrive();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (isSignedIn) {
      setLoading(true);
      getRecentsFiles().then((res: any) => {
        if (res && res.status === 200) {
          const data = res.result.files;
          setData(data);
        } else {
          setData([]);
        }
        setLoading(false);
      });
    } else {
      setData(null);
    }
  }, [isSignedIn]);

  return (
    <div>
      <div>
        {data &&
          data.length > 0 &&
          data.map((file: any) => <FileList key={file.id} {...file} />)}

        {loading && (
          <div className="space-y-3">
            <FileSkeleton />
            <FileSkeleton />
            <FileSkeleton />
            <FileSkeleton />
            <FileSkeleton />
            <FileSkeleton />
          </div>
        )}
      </div>
      <div className="mt-56 w-full text-center text-xl font-jost text-gray-dark">
        {!data && !loading && <p>Please Login to see recent files</p>}
      </div>
    </div>
  );
};

export default RecentFiles;
