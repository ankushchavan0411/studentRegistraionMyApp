import React, { useEffect, useState } from "react";
import { Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";

const ImageUpload = ({ handleImageUpload, images }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [fileList, setFileList] = useState(images);

  useEffect(() => {
    setFileList(images || []);
  }, [images]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const images = [];
    newFileList.forEach((element) => {
      images.push(element.response);
    });
    handleImageUpload(images);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    setPreviewVisible(true);
    setPreviewImage(src);
    setPreviewTitle(file.name);
  };
  return (
    <>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default ImageUpload;
