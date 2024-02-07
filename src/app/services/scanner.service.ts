import { Injectable } from '@angular/core';
import QrScanner from "qr-scanner";

export interface ScanConfig {
  element: HTMLVideoElement;
  onResult: (result: string) => void;
  onStartup: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor() {}

  public scan({ element, onResult, onStartup }: ScanConfig) {
    const scanner = new QrScanner(
      element,
      result => onResult(result.data),
      {
        calculateScanRegion: video => {
          return {
            width: video.videoWidth,
            height: video.videoHeight
          }
        }
      }
    );

    scanner.start().then(onStartup);

    return scanner.destroy;
  }
}
