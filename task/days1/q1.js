//HTTP1.1 vsHTTP2
/* 1.maltiplexing:
troduces multiplexing allowing multiplexing allowing multiple requests
 and responwses to be sent and recerived over a single tcp connection 
 simulrtaneously in cointrast,HTTP1.1 relies on separate connections for 
 each resource ,leading to increased latency ang overhead

 2.sever push:
        HTTP 2 introdues seve3r puch,enabling severs toproactively send
         resources to clients before they are requested .this preemptive 
         deliveery mechanism redues the number of round trips required
          to fetch resources,enhancing perfoprmance and speediong up psage
           load times

3 header com1ression:
                      HTTP2 employs header compression techniques to reduce 
overhead,resulting in smaller packet sizes and faster transmission of metadata.
this addresses the verbosity of headers in HTTP1.1,improving efficincy and 
reduicing latency


4.improved security:
                  while not a direct feature of the protocol HTTP2
encourages the use of secure connections through transport later security.
this enhances data privacy and integrity,promoting a safer browsing experience for users.




5.stream prioritization :
                    HTTP 2 allow for stream prioritization,enabling clients to
specity the importance of different resources are prioritized,improving 
overallpage load times and user experience
*/
