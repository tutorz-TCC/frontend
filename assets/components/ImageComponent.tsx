import React from "react";
import { ImageSourcePropType } from "react-native/types";
import { Image } from "react-native";

interface ImageComponentProps {
	url: ImageSourcePropType;
}

const ImageComponent = ({ url}:ImageComponentProps) => {
	return <Image source={url} style={{transform:`scale(0.7)`}} />;
};

export default ImageComponent;
