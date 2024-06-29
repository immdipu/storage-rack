import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { bytesFormat } from "@/lib/utils";
import FileIcon from "@/icons/FileIcon";
import { Ellipsis } from "lucide-react";
import OptionDropdown from "./OptionDropdown";
import { useGDrive } from "@/context/GoogleDriveContext";

const FileList: FC<IFile> = ({
  createdTime,
  hasThumbnail,
  id,
  name,
  owners,
  size,
  starred,
  thumbnailLink,
}) => {
  const { downloadFile, downloadDoc } = useGDrive();

  return (
    <div className=" h-14 hover:bg-neutral-100 items-center grid grid-cols-[3fr,0.7fr,1fr,0.2fr]">
      <div className=" h-full  py-1 flex items-center gap-7 w-full">
        <Avatar className="h-full  w-12 rounded-none  pl-1 object-cover">
          <AvatarImage src={thumbnailLink} />
          <AvatarFallback className="bg-blue-100 rounded-lg">
            <FileIcon className="size-9" />
          </AvatarFallback>
        </Avatar>
        <h5 className="font-jost text-blue-dark font-medium text-base">
          {name}
        </h5>
      </div>
      <div className="w-fit">{bytesFormat(size)}</div>

      <div className="w-fit">
        {owners.map((owner, index) => {
          return (
            <Avatar
              key={index}
              className="size-10 rounded-full object-cover"
              title={owner.displayName}
            >
              <AvatarImage src={owner?.photoLink} />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          );
        })}
      </div>
      <div className="w-fit flex justify-end px-4">
        {/* <OptionDropdown>
          <Ellipsis />
        </OptionDropdown> */}
        <button
          onClick={() => downloadDoc(id).then((res) => console.log(res))}
          className="bg-blue-dark text-white px-3 py-1 rounded-md"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default FileList;
