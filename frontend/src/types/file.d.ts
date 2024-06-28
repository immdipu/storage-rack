interface IFile {
  thumbnailLink: string;
  owners: Owner[];
  size: string;
  hasThumbnail: boolean;
  id: string;
  name: string;
  starred: boolean;
  createdTime: string;
  fileExtension: string;
}

interface IOwner {
  displayName: string;
  kind: string;
  me: boolean;
  permissionId: string;
  emailAddress: string;
  photoLink: string;
}
