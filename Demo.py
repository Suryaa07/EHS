from bluepy.btle import Scanner

scanner = Scanner()
devices = scanner.scan(10.0) # Scans for BLE devices for 10 seconds

for dev in devices:
    print(f"Device {dev.addr} ({dev.addrType}), RSSI={dev.rssi} dB")
    for (adtype, desc, value) in dev.getScanData():
        print(f"{desc} = {value}")