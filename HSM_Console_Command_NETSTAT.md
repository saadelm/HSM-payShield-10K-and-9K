Show Network Statistics

Function: Displays HSM network activity and security settings, including the status of the management and host ports. The HSM gathers information about each endpoint communicating with it.

Authorization: Not required.

Inputs (syntax examples):
- Show active socket protocols: `netstat [-AanT] [-f address_family]`
- Display other network data structures: `netstat [-dgiLmnrsTv] [-f address_family]`
- Continuously display configured interface traffic: `netstat [-dnT] [-I interface] [-w wait]`
- Show statistics for a named protocol: `netstat [-Tcp protocol]`
- Show per interface statistics for a protocol: `netstat [-p protocol] [-iT] [-I interface]`
- Show per interface statistics for an address family: `netstat [-sT] [-f address_family] [-i] [-I interface]`

Parameters:
- `-A`  Show addresses of all protocol control blocks.
- `-a`  Show status of all sockets.
- `-d`  Show number of dropped packets.
- `-f`  Filter by address family (AF_INET, AF_INET6, AF_LOCAL, AF_ARP).
- `-g`  Display multicast routing information.
- `-I`  Display information for the specified interface.
- `-L`  Show link-level routes (e.g. ARP or neighbor cache).
- `-m`  Show memory management statistics.
- `-n`  Show network addresses numerically.
- `-p`  Show statistics for a protocol by name.
- `-r`  Show routing tables.
- `-s`  Show protocol statistics, suppressing zero valued counters if repeated.
- `-T`  Use TCP for name lookups (default is UDP).
- `-v`  Provide verbose output.
- `-w`  Specify the interval for displaying interface statistics.

![image](https://user-images.githubusercontent.com/77227227/196636232-050f1021-931c-4e04-9568-1ab4101224ef.png)
