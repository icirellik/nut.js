import { Image } from "@potatoranch/shared";
import { DataSinkInterface } from "./data-sink.interface";

export interface ImageWriterParameters {
  image: Image;
  path: string;
}

export type ImageWriter = DataSinkInterface<ImageWriterParameters, void>;
