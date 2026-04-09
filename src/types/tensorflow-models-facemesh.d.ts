declare module "@tensorflow-models/facemesh" {
    import { Tensor, TensorLike } from "@tensorflow/tfjs";
  
    export interface Face {
      scaledMesh: [number, number, number][];
      boundingBox: {
        topLeft: [number, number];
        bottomRight: [number, number];
      };
    }
  
    export interface FaceMeshConfig {
      maxFaces?: number;
      inputResolution?: { width: number; height: number } | number;
      scale?: number;
    }
  
    export class FaceMesh {
      static load(config?: FaceMeshConfig): Promise<FaceMesh>;
      estimateFaces(
        input: Tensor | TensorLike,
        config?: { flipHorizontal?: boolean }
      ): Promise<Face[]>;
    }
  
    export function load(config?: FaceMeshConfig): Promise<FaceMesh>;
  }