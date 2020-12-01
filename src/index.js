export default function svgHueFilterMatrix (s) {
  s= s || 0
  const lumR = 0.3086
  const lumG = 0.6094
  const lumB = 0.0820
  s = s * 0.01 + 1
  const sr = (1 - s) * lumR
  const sg = (1 - s) * lumG
  const sb = (1 - s) * lumB
  const matrix =
    `${sr + s} ${sg} ${sb} 0 0
    ${sr} ${sg + s} ${sb} 0 0
    ${sr} ${sg} ${sb + s} 0 0
    0 0 0 1 0`
  return matrix
}