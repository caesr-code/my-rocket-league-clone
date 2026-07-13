# Rocket Arena Turbo League

GitHub Pages-ready build for desktop and mobile.

## Online multiplayer

- Online 1v1 across separate computers and Wi-Fi networks
- Online 2v2 for up to four separate devices
- One player creates a six-character room code
- Other players open the same GitHub Pages URL and join with that code
- Every player chooses their own locally saved garage car
- WebRTC data channels are used for gameplay traffic
- PeerJS cloud signalling is used to establish the connection

The host is authoritative for physics and broadcasts snapshots to the other players. Online play requires internet access. Some restrictive school, business, carrier-grade NAT, or firewall networks may block direct WebRTC connections.

## Publish

Upload all files in this folder to the repository root and enable GitHub Pages.
