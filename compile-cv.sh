#!/bin/bash

# Script to compile LaTeX CV to PDF
# Requirements: pdflatex (install via: brew install --cask mactex)

echo "Compiling CV to PDF..."

# Navigate to the directory
cd "$(dirname "$0")"

# Compile the LaTeX file
pdflatex -interaction=nonstopmode -output-directory=public CV_MD_Showaib_Rahman_Tanveer.tex

# Run twice to resolve references
pdflatex -interaction=nonstopmode -output-directory=public CV_MD_Showaib_Rahman_Tanveer.tex

# Clean up auxiliary files
rm -f public/CV_MD_Showaib_Rahman_Tanveer.aux
rm -f public/CV_MD_Showaib_Rahman_Tanveer.log
rm -f public/CV_MD_Showaib_Rahman_Tanveer.out

echo "✅ CV compiled successfully! PDF is in public/CV_MD_Showaib_Rahman_Tanveer.pdf"
