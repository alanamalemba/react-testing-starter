import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render anything if imageUrls is empty", () => {
    const renderResult = render(<ProductImageGallery imageUrls={[]} />);
    screen.debug();
    expect(renderResult.container).toBeEmptyDOMElement();
  });

  it("should render a list of images if imageUrls is not empty", () => {
    const imageUrls = [
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    ];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(4);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
