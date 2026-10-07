export const metrics = [
  {
    label: "CANDIDATES",
    value: "18,642",
    description: "after hybrid blocking"
  },
  {
    label: "FEATURES",
    value: "115+",
    description: "generated per pair"
  },
  {
    label: "HIGH CONFIDENCE",
    value: "7,842",
    description: "reliable matches"
  },
  {
    label: "UNCERTAIN",
    value: "612",
    description: "sent for reranking",
    peach: true
  }
];

export const matchRows = [
  {
    source: "S1_004821",
    target: "S2_018294",
    score: "0.982",
    type: "high",
    decision: "MATCH"
  },
  {
    source: "S1_002147",
    target: "S3_006821",
    score: "0.961",
    type: "high",
    decision: "MATCH"
  },
  {
    source: "S1_009382",
    target: "S2_003921",
    score: "0.744",
    type: "uncertain",
    decision: "RERANK"
  },
  {
    source: "S1_007421",
    target: "S3_001284",
    score: "0.934",
    type: "high",
    decision: "MATCH"
  },
  {
    source: "S1_001928",
    target: "S2_009812",
    score: "0.681",
    type: "uncertain",
    decision: "REVIEW"
  }
];

export const pipelineSteps = [
  ["01", "Blocking", "RRF · FAISS · TF-IDF"],
  ["02", "Features", "115+ signals"],
  ["03", "LightGBM", "216 trees"],
  ["04", "Reranking", "Cross-Encoder"],
  ["05", "Threshold", "Match score"]
];

export function runPipelineSteps(setStatus, onComplete) {
  const steps = [
    "Running hybrid cascade...",
    "Blocking complete",
    "Generating 115+ features...",
    "Scoring with LightGBM...",
    "Reranking uncertain pairs...",
    "Thresholding matches..."
  ];

  steps.forEach((message, index) => {
    setTimeout(() => {
      setStatus(message);
    }, index * 700);
  });

  setTimeout(onComplete, steps.length * 700);
}