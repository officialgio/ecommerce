import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { DirectoryCategory } from "../directory/directory.component";
import { FC } from "react";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  // Ensure each Directory navigates to their specific route
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
