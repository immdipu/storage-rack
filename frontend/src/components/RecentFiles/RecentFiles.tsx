import React from "react";
import FileList from "../File/FileList";

const data = [
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBMj51Rx-xGYpXPr6U3xSei-TjdAeJ8yMTXwlLo1RK0ks3nJoLAODz-KLTSGmm827JRUIvxsK2ffv1vF4iTycIrh0T_Y5qRKl6INeHRUfiHxYfP8jsti_8qWi27ZJA=s220",
    owners: [
      {
        displayName: "Dipu Chaurasiya",
        kind: "drive#user",
        me: true,
        permissionId: "06943432978803867552",
        emailAddress: "dipu.chaurasiya91@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a/ACg8ocKtA88dUd8FR_5cx_LkVbNckTCVG6qy--2jYComVj-YGML9gy7G=s64",
      },
    ],
    size: "36470",
    hasThumbnail: true,
    id: "1KcZfDkDOQ8WDuhj0VBjb9OLeJRnhkY2nsUpQo9gbBAU",
    name: "Contract Updated (1)",
    starred: false,
    createdTime: "2024-06-26T01:35:11.098Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBNauLT9RbVn8wv0PdRULLI_KFcGB8l_pmLFcoyyq8tW144hueSyeKQp8uPf_wyXWIUhrVmSVjrEmM4i5Aw0enCU2uFDBgKAHJgAuc85Sq1GbiQ=s220",
    owners: [
      {
        displayName: "Dipu Chaurasiya",
        kind: "drive#user",
        me: true,
        permissionId: "06943432978803867552",
        emailAddress: "dipu.chaurasiya91@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a/ACg8ocKtA88dUd8FR_5cx_LkVbNckTCVG6qy--2jYComVj-YGML9gy7G=s64",
      },
    ],
    size: "206",
    hasThumbnail: true,
    id: "1NtAWFCJU_iqlviXwwpFTsftlD79FKcnB",
    name: "github-recovery-codes.txt",
    starred: false,
    createdTime: "2024-06-25T00:31:07.841Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBOpfNn8a-NwvE_-B_cghPv3pm0JAcQZ0BFXhYNJnrjKeSIbGvY2IBkvxiKrEsbLXPlEoQXRsrnaFGxzfHwtXdy0fGZZPWZYIjq9PYWD3gYmtYjc8OVBYHCp0CiJRQ=s220",
    owners: [
      {
        displayName: "ayan",
        kind: "drive#user",
        me: false,
        permissionId: "06500633364038242743",
        emailAddress: "ayan@withampersand.com",
        photoLink:
          "https://lh3.googleusercontent.com/a-/ALV-UjWEu6kDhhzhLHYXkbF1P25-Ur4sF4wLWFcwV91t0udEdBjdNA=s64",
      },
    ],
    size: "411216",
    hasThumbnail: true,
    id: "1CjIFY-JXOQzEkgrKgkkX8KpCWKMcktYoqtDOVl0ZE58",
    name: "Ampersand Onboarding Doc - for Dipu",
    starred: false,
    createdTime: "2024-06-04T23:17:46.326Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBNSekvv6ZIUHiT3b1PBSFpfxZ8xjsYplZa21KBb8LVSsjvWpBG6zH7x9NCHF-bWw-9CjrtsZ4XVhSjgdrIXsxnEQ6TKfOLmAfGo6RHSrMr3Ie0=s220",
    owners: [
      {
        displayName: "Dipu Chaurasiya",
        kind: "drive#user",
        me: true,
        permissionId: "06943432978803867552",
        emailAddress: "dipu.chaurasiya91@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a/ACg8ocKtA88dUd8FR_5cx_LkVbNckTCVG6qy--2jYComVj-YGML9gy7G=s64",
      },
    ],
    size: "196540",
    hasThumbnail: true,
    id: "1B0bcNEgCFPSNk_wHN6zUg8YHrhHCJjUv",
    name: "Onset Labs, Inc. SAFE.docx",
    starred: false,
    createdTime: "2024-06-21T05:10:44.000Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBPdaJMGT1XjRSnsGBT6mYqkwBXjY5FjoKc48iibo5lke58DFm7sA0iAPf7LeCRz6G62TJDc1Mk96_5CrC7DbqKNlw5hBkvH1Euov-pVQF_bvudU8NnIRexIIRBgMw=s220",
    owners: [
      {
        displayName: "Dipu Chaurasiya",
        kind: "drive#user",
        me: true,
        permissionId: "06943432978803867552",
        emailAddress: "dipu.chaurasiya91@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a/ACg8ocKtA88dUd8FR_5cx_LkVbNckTCVG6qy--2jYComVj-YGML9gy7G=s64",
      },
    ],
    size: "33041740",
    hasThumbnail: true,
    id: "1Dbs5podUn16a-wV5LASOc6xW6dMeKmxgq_YunPAt3yw",
    name: "Your big idea",
    starred: false,
    createdTime: "2024-06-18T14:25:32.994Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBOePckPYMg0-E0gVQFf-JsdCqQ-vsPQOWmRBouE5EK-Oh_eBfEvWkb7Qu0w8oYwE3lIS77yfFk25wCc9yOuGUOThqtz52cG4FYyx9ELMfAEsBdjyeAAOCPL3XueUw=s220",
    owners: [
      {
        displayName: "info",
        kind: "drive#user",
        me: false,
        permissionId: "14710928509872345406",
        emailAddress: "info@sandconsole.com",
        photoLink:
          "https://lh3.googleusercontent.com/a-/ALV-UjVARKHrnAUVro3hTWlrmCma8puFrfbIJbRCUoUOjI5CtCKV2A=s64",
      },
    ],
    size: "5547",
    hasThumbnail: true,
    id: "1Nz3VsYEgZxf8ZZ6-SXWi-7GUKpEbrjW-7Q9_XxJRPV8",
    name: "2024-06-02(Weekly Meeting)",
    starred: false,
    createdTime: "2024-06-02T06:17:31.507Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBM_RQ197jdS3I65S2CK73vEQnVEZ0BoeCOgkuzeyGPib2ZZ1vH7vOOjJ55nE2W-VBI3cGdffPbVbaqtsZPBh9Sdpm1f0V8eU-LPy24htTArMnY=s220",
    owners: [
      {
        displayName: "Dipu Chaurasiya",
        kind: "drive#user",
        me: true,
        permissionId: "06943432978803867552",
        emailAddress: "dipu.chaurasiya91@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a/ACg8ocKtA88dUd8FR_5cx_LkVbNckTCVG6qy--2jYComVj-YGML9gy7G=s64",
      },
    ],
    size: "320373",
    hasThumbnail: true,
    id: "1FhKNJPcVhwzjg5z9NhKxYCQhpUzXS6Dk",
    name: "Contract Updated (1).pdf",
    starred: false,
    createdTime: "2024-05-17T13:56:35.000Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBNidr6kSGVoqXr_NQ65SHJtr6dfK0IRk2_QtTalVuWgaAd-xlxN3XYUyQFk_rXNm5Yy5Qpy4MHRzFFLd3Nu3X1DNMXBOR02oIWUbqnQXv3bZcs=s220",
    owners: [
      {
        displayName: "pravingpt33",
        kind: "drive#user",
        me: false,
        permissionId: "05216630671585601982",
        emailAddress: "pravingpt33@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a-/ALV-UjVscPBOv1loWQzvqkBNFZpzNNd9txRbo7sSJtijZElSzoxgVtM=s64",
      },
    ],
    size: "2022260",
    hasThumbnail: true,
    id: "15rYehdn1VfBvHmdfbQown7S2m_SnQubD",
    name: "2078 Question By;Pravin Gupta.pdf",
    starred: false,
    createdTime: "2022-11-16T03:15:28.371Z",
  },
  {
    thumbnailLink:
      "https://lh3.googleusercontent.com/drive-storage/AJQWtBNGbPIekl_bxv6zFkAozeiig7rWnutjhjxFLBMy9DCfHOXhfL3xnl31vudc6LhLpj6ta7-0G5gvTuxxhtQivj6mfDeD0V9Al1basVrYWLN5iHDlFPECfc6qv7KwiQ=s220",
    owners: [
      {
        displayName: "banerr2006",
        kind: "drive#user",
        me: false,
        permissionId: "10669572976855603006",
        emailAddress: "banerr2006@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a-/ALV-UjXJ1EMJ9cdhM1cLdBQkITqguQ9CSH-dd9c9dAT_BMShoGs-veQ=s64",
      },
    ],
    size: "2285",
    hasThumbnail: true,
    id: "1yH8BSXNpRMlkYLyNBMhWCN_59A9Usm27rGo7N1qWqgA",
    name: "More informatin here",
    starred: false,
    createdTime: "2023-08-16T08:26:40.544Z",
  },
  {
    owners: [
      {
        displayName: "riseschoolkkd",
        kind: "drive#user",
        me: false,
        permissionId: "09859838483360020780",
        emailAddress: "riseschoolkkd@gmail.com",
        photoLink:
          "https://lh3.googleusercontent.com/a-/ALV-UjVs8JGNBg_U6tIh5wPtRN5PPfyGw3SXFk3w2iUMQiwL3Vg9BA=s64",
      },
    ],
    hasThumbnail: false,
    id: "1ZoPtgEop5rZoYEADpTCuNtmMSgiTUaCT",
    name: "LORRY - APP SCREENS",
    starred: false,
    createdTime: "2024-02-22T05:40:13.882Z",
  },
];

const RecentFiles = () => {
  return (
    <div>
      {data.map((file: any) => (
        <FileList key={file.id} {...file} />
      ))}
    </div>
  );
};

export default RecentFiles;
