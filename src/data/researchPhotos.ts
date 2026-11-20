// M.Sc. research photos (Sylhet Agricultural University labs, April 2023).
// Images live in src/assets/research/ — Astro resizes them at build time.
import type { ImageMetadata } from 'astro';
import pipettingPhenolics from '../assets/research/lab-pipetting-phenolics.jpg';
import reagentPrep from '../assets/research/lab-reagent-prep.jpg';
import extractPrep from '../assets/research/lab-extract-prep.jpg';
import sampleSeries from '../assets/research/lab-sample-series.jpg';
import cuvettePrep from '../assets/research/lab-cuvette-prep.jpg';
import pipettingSpectro from '../assets/research/lab-pipetting-spectro.jpg';
import spectrophotometer from '../assets/research/lab-spectrophotometer.jpg';
import dpphStandard from '../assets/research/dpph-standard-control.jpg';
import dpphSeries from '../assets/research/dpph-assay-series.jpg';
import dpphSamples from '../assets/research/dpph-sample-extracts.jpg';
import extractSeries from '../assets/research/extract-series.jpg';
import centrifugeTop from '../assets/research/centrifuge-tubes-top.jpg';
import sampleExtraction from '../assets/research/sample-extraction.jpg';
import phMeasurement from '../assets/research/ph-measurement.jpg';

export interface ResearchPhoto { src: ImageMetadata; caption: string }

export const researchPhotos: ResearchPhoto[] = [
  { src: pipettingPhenolics, caption: 'Pipetting reagents for phytochemical analysis of black pepper fruit' },
  { src: dpphStandard, caption: 'DPPH antioxidant assay: ascorbic acid standard next to the control' },
  { src: pipettingSpectro, caption: 'Preparing samples beside the UV–Vis spectrophotometer' },
  { src: dpphSeries, caption: 'DPPH assay series: the purple fades as antioxidant activity rises' },
  { src: extractPrep, caption: 'Preparing labelled fruit extracts for analysis' },
  { src: spectrophotometer, caption: 'Reading absorbance on the UV–Vis spectrophotometer' },
  { src: sampleSeries, caption: 'Extract vials and tube series set up for an assay' },
  { src: cuvettePrep, caption: 'Preparing a cuvette for spectrophotometric measurement' },
  { src: extractSeries, caption: 'Sample extracts lined up for phytochemical assays' },
  { src: reagentPrep, caption: 'Measuring reagents at the bench' },
  { src: dpphSamples, caption: 'Antioxidant assay on sample extracts' },
  { src: sampleExtraction, caption: 'Sample extraction in centrifuge tubes' },
  { src: centrifugeTop, caption: 'Ground fruit samples in centrifuge tubes' },
  { src: phMeasurement, caption: 'pH measurement station' },
];
