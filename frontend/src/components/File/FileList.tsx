import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { bytesFormat } from "@/lib/utils";
import FileIcon from "@/icons/FileIcon";
import { Ellipsis } from "lucide-react";
import OptionDropdown from "./OptionDropdown";

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
  return (
    <div className=" h-14 hover:bg-neutral-100 items-center grid grid-cols-5">
      <Avatar className="h-full  w-12 rounded-none py-1 pl-1 object-cover">
        <AvatarImage src={thumbnailLink} />
        <AvatarFallback className="bg-blue-100 rounded-lg">
          <FileIcon className="size-9" />
        </AvatarFallback>
      </Avatar>
      <div>
        <h5 className="font-jost text-blue-dark font-medium text-base">
          {name}
        </h5>
      </div>
      <div>{bytesFormat(size)}</div>

      <div>
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
      <div className="w-full flex justify-end px-4">
        <OptionDropdown>
          <Ellipsis />
        </OptionDropdown>
      </div>
    </div>
  );
};

export default FileList;