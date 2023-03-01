import { labelhash, dnsNameNotationDecode } from '../src/utils'

describe('utils module', () => {
  test('labelhash("hi")', () => {
    expect(labelhash("hi")).toBe("0x7624778dedc75f8b322b9fa1632a610d40b85e106c7d9bf0e743a9ce291b9c6f");
  });

  test('dnsNameNotationDecode', () => {
    expect(dnsNameNotationDecode('\x05hello\x03com\x00')).toBe('hello.com');
    expect(dnsNameNotationDecode('\bjiuhuaw1\x04web3\x00')).toBe('jiuhuaw1.web3');
    expect(dnsNameNotationDecode('\x07jiuhua3\x03eth\x00')).toBe('jiuhua3.eth');
    expect(dnsNameNotationDecode('\x05minix\x04web3\x00')).toBe('minix.web3');
    expect(dnsNameNotationDecode('\x0588181\x04web3\x00')).toBe('88181.web3');
    expect(dnsNameNotationDecode('\b881✅81\x04web3\x00')).toBe('881✅81.web3');
  });

});