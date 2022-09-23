import { sign, format } from "js-conflux-sdk"
import uts46 from 'idna-uts46-hx'

export function labelhash (label: string) {
  const hashBuf = sign.keccak256(Buffer.from(label))
  return format.hex(hashBuf)
}

export function namehash (inputName: string) {
  // Reject empty names:
  const name = normalize(inputName)
  let node = Buffer.alloc(32)

  if (name) {
    const labels = name.split('.')

    for(let i = labels.length - 1; i >= 0; i--) {
      let labelSha = sign.keccak256(Buffer.from(labels[i]))
      node = sign.keccak256(Buffer.concat([node, labelSha], 64))
    }
  }

  return format.hex(node)
}

function normalize(name: string) {
  return name ? uts46.toUnicode(name, {useStd3ASCII: true}) : name
}