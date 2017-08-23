Layers of networking - Open systems interconnect (OSI) stack

1. Physical - unit: bits

2. Data link - unit: ethernet frames (~1.5 KB). 
  Level of ethernet: MAC addresses linked to each other in frames
  (src-MAC and dst-MAC address)

3. Network - unit: packets. (IP addresses)
  IP packet located inside ethernet frames (src-IP and dst-IP)

4. Transport
  * Segments:
    1. Transmission control protocol (TCP)
    2. User datagram protocol (udp)

  ```
  TCP:

  3-way handshake (SYN, SYN/ACK, ACK)

  SYN - sync
  ACK - acknowledge

  Client -> SYN -> Server
  Client <- SYN/ACK <- Server
  Client -> ACK -> Server

  Client sends packet to server
  (Server will 'window' the packets received)
  Server sends ACK packet after window expires

  Client sends FIN packet
  Nagle's algorithm
  ```

  ```
  UDP:

  Great for media-streaming (packet loss is not important)
  ```

5. Session - sockets (ports)
  1. Socket object (source IP, source port, dest IP, dest port)

6. Presentation - SSL
  * Public key cryptography
  
  1. Client -> TCP conn. -> Server
  2. Client -> Hello -> Server
  3. Client <- Hello <- Server
  4. Client -> C Key exchange -> Server
  5. Client <- S Key exchange <- Server
  6. ==== Secure channel ==== 

7. Application
  * HTTP, SMTP, SSH, etc.

-> User
