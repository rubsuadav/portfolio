export function downloadCV(): void {
  const link = document.createElement("a");
  link.href = "/CV_Ruben_Suarez_David.pdf";
  link.download = "CV_Ruben_Suarez_David.pdf";
  link.click();
}
