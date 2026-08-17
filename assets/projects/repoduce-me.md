---
title: Repoduce-Me
badge: 1st place — Constructor University Hackathon
badgeStyle: win
tags: Python, LLM, Reproducibility, Hackathon
repo: https://github.com/Nikolay-Ts/Repoduce-Me
---

A scientific code reproducibility toolkit: it takes a research paper and turns it
into a demo you can actually run. The pipeline parses a PDF or arXiv URL, detects
the GitHub repository behind it, clones it, infers the Python dependencies, builds
an isolated virtual environment, then uses an LLM to write a runnable
`generated_demo.py` — and optionally executes it. It also supports batch
processing across many papers at once.

The full pipeline:

- Parse the input — PDF or URL — into extracted text
- Detect the GitHub repo by regex, falling back to an LLM
- Clone it into a temporary or persistent workspace
- Infer dependencies from pyproject/setup/requirements, or by static import analysis
- Build a virtual environment and install everything safely
- Generate the demo script, then optionally auto-run it inside the venv

![Placeholder — a terminal recording of the pipeline would work well here](assets/fall-back.jpg)
