// ============================
// NETZWERKTECHNIK LERN- UND QUIZ-APP
// Lernmodus + Quizmodus + DOCX Download
// ============================

const learningModules = [
{
        "title": "Grundlagen: Was ist ein Netzwerk?",
        "body": "Von einem Netzwerk spricht man, wenn mehrere Geräte miteinander verbunden sind und miteinander kommunizieren können. Es reicht also nicht aus, dass Geräte nur irgendwie verkabelt sind. Wichtig ist, dass Daten ausgetauscht werden können. Netzwerke dienen dazu, Ressourcen gemeinsam zu nutzen, Daten auszutauschen, Dienste bereitzustellen und Arbeitsabläufe effizienter zu machen. Beispiele für gemeinsam genutzte Ressourcen sind Drucker, Dateien, Programme, Internetzugang oder Serverdienste.",
        "merksatz": "Netzwerk = Geräte sind verbunden und können kommunizieren."
    },
    {
        "title": "Netzwerkziele",
        "body": "Netzwerke werden aufgebaut, um bestimmte Ziele zu erreichen. Ein wichtiges Ziel ist der Funktionsverbund: Mehrere Benutzer können gemeinsame Ressourcen nutzen, zum Beispiel Drucker oder Programme. Beim Datenverbund greifen Benutzer gemeinsam auf Datenbestände zu. Beim Verfügbarkeitsverbund kann eine defekte Arbeitsstation leichter ersetzt werden, weil Daten und Dienste im Netz verfügbar sind. Außerdem sollen Netzwerke flexibel erweiterbar sein, eine gute Geschwindigkeit bieten und trotzdem wirtschaftlich bleiben.",
        "merksatz": "Funktionsverbund = Ressourcen gemeinsam nutzen."
    },
    {
        "title": "Peer-to-Peer",
        "body": "Beim Peer-to-Peer-Konzept sind die Rechner grundsätzlich gleichberechtigt. Jeder Rechner kann Dienste oder Ressourcen anbieten und gleichzeitig Dienste anderer Rechner nutzen. Es gibt keinen zentralen Server, der alles verwaltet. Das ist für kleine Netzwerke einfach und günstig, wird aber bei mehr Stationen schnell unübersichtlich. Nachteile sind ein höherer Koordinationsaufwand, geringere Sicherheitsfunktionen und keine zentrale Benutzerverwaltung. Peer-to-Peer ist deshalb eher für kleine Netze geeignet.",
        "merksatz": "Peer-to-Peer = alle Rechner sind gleichberechtigt."
    },
    {
        "title": "Client-Server",
        "body": "Beim Client-Server-Konzept gibt es eine klare Aufgabenteilung. Server stellen zentral Ressourcen und Dienstleistungen bereit. Clients nutzen diese Dienste. Beispiele sind Datei-Server, Druckserver, Webserver, DNS-Server oder DHCP-Server. Vorteile sind eine zentrale Verwaltung, ein höherer Sicherheitsstandard und bessere Kontrolle über Benutzer und Ressourcen. Der Nachteil ist meistens ein höherer Einrichtungs- und Verwaltungsaufwand.",
        "merksatz": "Client fragt an, Server stellt bereit."
    },
    {
        "title": "Physikalische und logische Topologie",
        "body": "Die physikalische Topologie beschreibt, wie ein Netzwerk tatsächlich aufgebaut und verkabelt ist. Sie zeigt also, wie die Kabel verlaufen und wie die Geräte angeschlossen sind. Die logische Topologie beschreibt dagegen, wie die Kommunikation im Netzwerk abläuft. Physikalische und logische Topologie müssen nicht identisch sein. Ein klassisches Beispiel ist ein Netz mit Hub: Physikalisch ist es ein Stern, weil alle Geräte am Hub hängen. Logisch funktioniert es aber wie ein Bus, weil alle Signale an alle weitergegeben werden.",
        "merksatz": "Physikalisch = Kabelwege, logisch = Verkehrsregeln."
    },
    {
        "title": "Bus-Topologie",
        "body": "Bei der Bus-Topologie teilen sich alle Geräte ein gemeinsames Übertragungsmedium, also ein gemeinsames Kabel. Sendet eine Station ein Signal auf den Bus, breitet es sich in beide Richtungen aus. Das nennt man auch shared media. Der Vorteil ist der geringe Verkabelungsaufwand. Nachteile sind Kollisionen, hoher Datenverkehr und eine schwierige Fehlersuche. Fällt das gemeinsame Kabel aus oder ist eine Verbindung locker, kann das gesamte Netz betroffen sein. Abschlusswiderstände an den Busenden verhindern Signalreflexionen.",
        "merksatz": "Bus = alle teilen sich ein gemeinsames Kabel."
    },
    {
        "title": "Stern-Topologie",
        "body": "Bei der Stern-Topologie wird jedes Gerät mit einem eigenen Kabel an einen zentralen Verteiler angeschlossen. Heute ist dieser Verteiler normalerweise ein Switch. Früher wurden auch Hubs verwendet. Der Vorteil ist, dass der Ausfall eines einzelnen Kabels oder einer Station nicht sofort das gesamte Netz lahmlegt. Außerdem lassen sich weitere Stationen relativ einfach hinzufügen. Der Nachteil ist der höhere Verkabelungsaufwand und die Abhängigkeit vom zentralen Verteiler. Fällt der Switch aus, ist die Kommunikation über diesen Stern gestört.",
        "merksatz": "Stern = alle Geräte gehen zum Mittelpunkt."
    },
    {
        "title": "Ring-Topologie",
        "body": "Bei der Ring-Topologie sind die Stationen so verbunden, dass ein geschlossener Kreis entsteht. Daten werden von Station zu Station weitergereicht. In klassischen Ringnetzen läuft der Datenverkehr nur in eine Richtung. Token Ring ist ein bekanntes Beispiel für eine logische Ringtopologie. Physikalisch wurde Token Ring oft als Stern aufgebaut, logisch aber als Ring betrieben. Ein Nachteil klassischer Ringstrukturen ist, dass ein Ausfall einer Station oder Teilstrecke das Netz stark beeinträchtigen kann.",
        "merksatz": "Ring = Stationen bilden einen Kreis."
    },
    {
        "title": "Shared Media",
        "body": "Shared Media bedeutet, dass mehrere Stationen dasselbe Übertragungsmedium gemeinsam nutzen. Dadurch kann immer nur eine Station sinnvoll senden. Wenn zwei Stationen gleichzeitig senden, können Kollisionen entstehen. Deshalb braucht man bei gemeinsam genutzten Medien ein Zugriffsverfahren. Bei Ethernet mit logischer Bustopologie ist das klassische Zugriffsverfahren CSMA/CD. Bei Token Ring wird Token Passing verwendet.",
        "merksatz": "Shared Media = alle teilen sich das Medium."
    },
    {
        "title": "Übertragungsgeschwindigkeit",
        "body": "Die Übertragungsgeschwindigkeit gibt an, wie viele Daten pro Sekunde übertragen werden können. In der Netzwerktechnik wird sie normalerweise in Bit pro Sekunde angegeben, also bit/s, kbit/s, Mbit/s oder Gbit/s. Wichtig ist der Unterschied zwischen Bit und Byte. 1 Byte besteht aus 8 Bit. Netzwerkgeschwindigkeiten werden fast immer in Bit pro Sekunde angegeben, Dateigrößen dagegen häufig in Byte.",
        "merksatz": "Netzwerkgeschwindigkeit = Bit pro Sekunde."
    },
    {
        "title": "Dämpfung und Störungen",
        "body": "Dämpfung bedeutet, dass ein Signal auf einer Leitung mit zunehmender Entfernung schwächer wird. Dadurch ist die maximale Leitungslänge begrenzt. Übersprechen oder Nebensprechen bedeutet, dass sich Signale benachbarter Adern gegenseitig beeinflussen. Außerdem können elektromagnetische Störquellen die Übertragung beeinträchtigen. Kabel unterscheiden sich deshalb in ihrer Störempfindlichkeit, Schirmung und maximalen Reichweite.",
        "merksatz": "Dämpfung = Signal wird schwächer."
    },
    {
        "title": "Koaxialkabel",
        "body": "Koaxialkabel wurden früher häufig für Ethernet-Busnetze verwendet. Sie bestehen von innen nach außen aus Innenleiter, Isolierschicht, Abschirmung und Außenmantel. Für alte Ethernet-Netzwerke wurde häufig RG-58-Kabel eingesetzt. Dieses Kabel hat eine Impedanz von 50 Ohm. Koaxialkabel waren relativ günstig und weniger anfällig gegen Störstrahlung, sind in modernen lokalen Netzwerken aber weitgehend durch Twisted-Pair-Kabel ersetzt worden.",
        "merksatz": "Koax alt = Busnetz, BNC, RG 58, 50 Ohm."
    },
    {
        "title": "BNC und Abschlusswiderstände",
        "body": "Bei alten Koaxial-Ethernet-Netzen wurden BNC-Stecker und T-Stücke verwendet. Der Bus musste an beiden Enden mit Abschlusswiderständen terminiert werden. Diese Abschlusswiderstände verhindern Signalreflexionen an den Busenden. Ohne Terminatoren würden Signale zurückgeworfen und die Kommunikation stören. BNC steht in den Unterlagen für British Naval Connector.",
        "merksatz": "Busenden brauchen Terminatoren gegen Reflexionen."
    },
    {
        "title": "Twisted-Pair-Kabel",
        "body": "Twisted-Pair-Kabel bestehen aus verdrillten Adernpaaren. Die Verdrillung vermindert Störungen von außen und das Übersprechen zwischen Adernpaaren. Twisted-Pair-Kabel werden heute sehr häufig bei physikalischer Stern-Topologie eingesetzt, also zum Beispiel zwischen PC und Switch. Die maximale Leitungslänge zwischen Verteiler und Computer beträgt normalerweise 100 Meter. Als Stecker wird meist RJ-45 verwendet.",
        "merksatz": "Twisted Pair = verdrillt, RJ-45, meistens 100 m."
    },
    {
        "title": "UTP, STP und Schirmung",
        "body": "UTP bedeutet Unshielded Twisted Pair und bezeichnet ungeschirmtes Twisted-Pair-Kabel. STP bedeutet Shielded Twisted Pair und besitzt eine paarweise Schirmung. Zusätzlich gibt es Varianten mit Gesamtschirm, zum Beispiel S/UTP oder S/STP. Schirmung reduziert Störeinflüsse und kann höhere Übertragungsraten oder stabilere Verbindungen ermöglichen. Je besser die Schirmung, desto besser ist das Kabel gegen elektromagnetische Störungen geschützt.",
        "merksatz": "U = ungeschirmt, S/STP = stärker geschirmt."
    },
    {
        "title": "RJ-45 und Crossover",
        "body": "Bei Twisted-Pair-Verkabelung wird meistens der RJ-45-Stecker verwendet. Er wird auch Westernstecker genannt, darf aber nicht mit dem kleineren RJ-11-Telefonstecker verwechselt werden. Ein normales Patchkabel ist an beiden Enden gleich belegt. Ein Cross-Connect- oder Crossover-Kabel kreuzt Sende- und Empfangspaare und wurde klassisch zur Direktverbindung zweier PCs verwendet.",
        "merksatz": "RJ-45 = Netzwerk, RJ-11 = Telefon."
    },
    {
        "title": "Glasfaser / LWL",
        "body": "LWL bedeutet Lichtwellenleiter. Glasfaserkabel übertragen Daten nicht elektrisch, sondern mit Lichtimpulsen. Glasfaser ist sehr schnell, störsicher und ermöglicht große Reichweiten. Sie wird deshalb besonders im Backbone-Bereich, zwischen Gebäuden oder für hohe Datenraten eingesetzt. Da die Signalübertragung oft unidirektional erfolgt, werden normalerweise zwei Fasern benötigt: eine zum Senden und eine zum Empfangen.",
        "merksatz": "Glasfaser = Licht, störsicher, große Reichweite."
    },
    {
        "title": "Glasfaserarten",
        "body": "Bei Glasfaser unterscheidet man unter anderem Multimode- und Monomode-Fasern. Multimode wird eher für kürzere bis mittlere Entfernungen eingesetzt. Monomode erreicht größere Entfernungen und höhere Datenübertragungsraten. Besonders für lange Strecken und sehr hohe Bandbreiten ist Monomode geeignet. Nachteile von Glasfaser sind empfindlichere Kabel, aufwendige Verarbeitung und teurere Gerätetechnik.",
        "merksatz": "Monomode = große Entfernung und hohe Datenrate."
    },
    {
        "title": "Strukturierte Verkabelung",
        "body": "Die strukturierte Verkabelung beschreibt einen einheitlichen Aufbauplan für Gebäudenetze. Sie wird in Primär-, Sekundär- und Tertiärverkabelung eingeteilt. Dadurch lassen sich Netzwerke übersichtlicher planen, warten und erweitern. Die Struktur ist unabhängig davon, ob später Sprache, Daten oder andere Dienste darüber laufen. Ziel ist eine flexible, standardisierte und langfristig nutzbare Verkabelung.",
        "merksatz": "Strukturierte Verkabelung = Primär, Sekundär, Tertiär."
    },
    {
        "title": "Primärverkabelung",
        "body": "Der Primärbereich verbindet Gebäude eines Standortes miteinander. Er wird auch Campus-, Gelände- oder Standortverkabelung genannt. Hier sind große Entfernungen und hohe Datenübertragungsraten wichtig. Deshalb wird im Primärbereich häufig Glasfaser eingesetzt. Glasfaser bietet hohe Bandbreite, geringe Dämpfung, elektromagnetische Unempfindlichkeit und galvanische Trennung zwischen Gebäuden. Die maximale Entfernung zwischen Standortverteiler und Gebäudeverteiler beträgt 1500 Meter.",
        "merksatz": "Primär = Gebäude zu Gebäude, meist Glasfaser."
    },
    {
        "title": "Sekundärverkabelung",
        "body": "Der Sekundärbereich verbindet den Gebäudeverteiler mit den Etagenverteilern. Er wird auch Steigbereich oder Vertikalverkabelung genannt. In diesem Bereich können Glasfaser und Twisted-Pair-Kabel eingesetzt werden. Bei Twisted-Pair sind 100 Meter die wichtige Grenze. Bei LWL sind längere Strecken möglich, zum Beispiel bis 500 Meter zwischen Gebäude- und Etagenverteiler.",
        "merksatz": "Sekundär = Stockwerke verbinden."
    },
    {
        "title": "Tertiärverkabelung",
        "body": "Der Tertiärbereich ist die Verkabelung innerhalb einer Etage. Er verbindet den Etagenverteiler mit den Anschlussdosen und Endgeräten. Diese Verkabelung nennt man auch Horizontalverkabelung. Bei Twisted-Pair beträgt die maximale Länge typischerweise 100 Meter. Das setzt sich aus fester Verkabelung und Patchkabeln zusammen. Im Tertiärbereich werden vor allem Twisted-Pair-Kabel eingesetzt.",
        "merksatz": "Tertiär = innerhalb der Etage bis zum Endgerät."
    },
    {
        "title": "Repeater",
        "body": "Ein Repeater arbeitet auf OSI-Schicht 1, also auf dem Physical Layer. Er verstärkt und regeneriert Signale. Er versteht keine MAC-Adressen, IP-Adressen oder Ports. Seine Aufgabe ist rein physikalisch: Ein abgeschwächtes Signal soll wieder brauchbar weitergegeben werden. Repeater verändern die logische Struktur eines Netzes nicht und trennen keine Kollisions- oder Broadcastdomänen.",
        "merksatz": "Repeater = Layer 1, Signal auffrischen."
    },
    {
        "title": "Hub",
        "body": "Ein Hub arbeitet ebenfalls auf OSI-Schicht 1 und ist im Prinzip ein Multiport-Repeater. Alle Ports eines Hubs sind intern wie ein gemeinsames Medium verbunden. Wenn eine Station sendet, wird das Signal an alle Ports weitergegeben. Deshalb kann bei einem Hub immer nur eine Station sinnvoll zur Zeit senden. Es ist nur Halbduplex möglich und CSMA/CD wird benötigt. Ein Hub trennt keine Kollisionsdomänen.",
        "merksatz": "Hub = Layer 1, alle hören alles."
    },
    {
        "title": "Bridge",
        "body": "Eine Bridge arbeitet auf OSI-Schicht 2. Sie wertet MAC-Adressen aus und kann dadurch Datenverkehr zwischen Netzwerksegmenten regeln. Bridges können Kollisionsdomänen trennen, weil sie nicht jedes Frame blind weiterleiten. Historisch wurden Bridges genutzt, um Netzabschnitte miteinander zu verbinden. Ein Switch kann als Multiport-Bridge verstanden werden.",
        "merksatz": "Bridge = Layer 2, arbeitet mit MAC-Adressen."
    },
    {
        "title": "Switch",
        "body": "Ein Switch arbeitet normalerweise auf OSI-Schicht 2. Er lernt MAC-Adressen und speichert sie in einer MAC-Tabelle. Dadurch kann er Frames gezielt an den passenden Port weiterleiten, statt sie an alle Ports zu senden. Jeder Switchport bildet mit dem angeschlossenen Endgerät eine eigene Kollisionsdomäne. Dadurch sind mehrere gleichzeitige Verbindungen möglich. Mit Switches ist Vollduplex möglich, wodurch gleichzeitig gesendet und empfangen werden kann.",
        "merksatz": "Switch = Layer 2, MAC-Tabelle, eigene Kollisionsdomänen."
    },
    {
        "title": "Mikrosegmentierung",
        "body": "Mikrosegmentierung bedeutet, dass jeder Switchport zusammen mit dem angeschlossenen Endgerät eine eigene Kollisionsdomäne bildet. Dadurch muss sich nicht mehr das ganze Netz ein gemeinsames Medium teilen. Das erhöht die nutzbare Bandbreite und reduziert Kollisionen. Bei einem Hub dagegen teilen sich alle Geräte eine Kollisionsdomäne. Deshalb ist ein Switch in modernen LANs deutlich effizienter als ein Hub.",
        "merksatz": "Ein Switchport = eine eigene Kollisionsdomäne."
    },
    {
        "title": "Router",
        "body": "Ein Router arbeitet auf OSI-Schicht 3. Er verbindet verschiedene Netze miteinander und nutzt IP-Adressen zur Weiterleitung. Router arbeiten mit Routingtabellen, um Wege zu anderen Netzen zu finden. Im LAN ist der Router oft das Standard-Gateway zum Internet. Router trennen Broadcastdomänen, weil Layer-2-Broadcasts nicht einfach in andere Netze weitergeleitet werden. Außerdem können Router NAT durchführen und private IP-Adressen in öffentliche übersetzen.",
        "merksatz": "Router = Layer 3, IP, Routing, Gateway."
    },
    {
        "title": "Gateway",
        "body": "Ein Gateway verbindet unterschiedliche Systeme, Netze oder Protokolle miteinander. In vielen Zusammenhängen wird der Begriff Standard-Gateway für den Router verwendet, über den ein lokales Netz andere Netze oder das Internet erreicht. Allgemein kann ein Gateway aber auch Protokolle oder Datenformate übersetzen. Es ist also eine Art Vermittler oder Übersetzer zwischen unterschiedlichen Kommunikationswelten.",
        "merksatz": "Gateway = Tor oder Übersetzer zwischen Netzen."
    },
    {
        "title": "Layer-3-Switch",
        "body": "Ein Layer-3-Switch kombiniert Funktionen eines Switches und eines Routers. Innerhalb eines VLANs oder Subnetzes arbeitet er wie ein normaler Switch auf Layer 2 mit MAC-Adressen. Zusätzlich kann er Routing-Funktionen auf Layer 3 übernehmen, also zwischen Subnetzen oder VLANs vermitteln. Layer-3-Switches sind häufig schneller als klassische Router, haben aber oft weniger WAN-Funktionen.",
        "merksatz": "Layer-3-Switch = Switch + Routing."
    },
    {
        "title": "Kollisionsdomäne",
        "body": "Eine Kollisionsdomäne ist ein Netzwerkbereich, in dem Kollisionen auftreten können, weil sich mehrere Stationen ein Übertragungsmedium teilen. Bei einem Hub gehören alle angeschlossenen Stationen zur gleichen Kollisionsdomäne. Bei einem Switch bildet jeder Port eine eigene Kollisionsdomäne. Kollisionsdomänen sollten möglichst klein sein, damit die nutzbare Bandbreite besser bleibt und weniger Kollisionen auftreten.",
        "merksatz": "Kollisionsdomäne = Bereich, in dem Kollisionen möglich sind."
    },
    {
        "title": "Broadcastdomäne",
        "body": "Eine Broadcastdomäne ist ein Netzwerkbereich, in dem ein Broadcast alle angeschlossenen Stationen erreichen kann. Switches leiten Broadcasts innerhalb eines VLANs weiter. Router begrenzen Broadcastdomänen, weil sie Layer-2-Broadcasts nicht einfach weiterleiten. Auch VLANs können Broadcastdomänen trennen. Zu große Broadcastdomänen können das Netz belasten, deshalb sollten sie sinnvoll begrenzt werden.",
        "merksatz": "Broadcastdomäne = Bereich, den ein Broadcast erreicht."
    },
    {
        "title": "Switching: Cut Through / Fast Forward",
        "body": "Beim Cut-Through- oder Fast-Forward-Verfahren liest der Switch nur den Anfang des Frames, insbesondere die Zieladresse. Danach leitet er den Frame sofort weiter. Der Vorteil ist die sehr geringe Latenz, weil nicht lange gewartet wird. Der Nachteil ist, dass keine vollständige Fehlerprüfung stattfindet. Fehlerhafte Frames können daher weitergeleitet werden.",
        "merksatz": "Cut Through = schnell, aber kaum Fehlerprüfung."
    },
    {
        "title": "Switching: Fragment Free",
        "body": "Beim Fragment-Free-Verfahren liest der Switch die ersten 64 Byte des Frames ein, bevor er weiterleitet. Das ist sinnvoll, weil viele Kollisionsfragmente in diesem Bereich erkannt werden können. Fragment Free ist ein Kompromiss zwischen Cut Through und Store and Forward. Es ist sicherer als Cut Through, aber schneller als Store and Forward.",
        "merksatz": "Fragment Free = erste 64 Byte prüfen."
    },
    {
        "title": "Switching: Store and Forward",
        "body": "Beim Store-and-Forward-Verfahren liest der Switch den gesamten Frame ein. Danach prüft er die Länge und die Fehlerprüfsumme, zum Beispiel FCS/CRC. Nur wenn der Frame korrekt ist, wird er weitergeleitet. Der Vorteil ist die beste Fehlerprüfung. Der Nachteil ist die höhere Latenz, weil der komplette Frame erst empfangen werden muss.",
        "merksatz": "Store and Forward = sicher, aber langsamer."
    },
    {
        "title": "CSMA/CD",
        "body": "CSMA/CD steht für Carrier Sense Multiple Access with Collision Detection. Carrier Sense bedeutet, dass eine Station vor dem Senden das Medium abhört. Multiple Access bedeutet, dass mehrere Stationen Zugriff auf dasselbe Medium haben. Collision Detection bedeutet, dass Kollisionen erkannt werden. Wenn eine Kollision erkannt wird, senden Stationen ein JAM-Signal, brechen ab und versuchen es nach einer zufälligen Wartezeit erneut. CSMA/CD eignet sich nicht gut für zeitkritische Anwendungen, weil der genaue Sendezeitpunkt nicht sicher vorhersehbar ist.",
        "merksatz": "CSMA/CD = hören, senden, Kollision erkennen."
    },
    {
        "title": "Token Passing",
        "body": "Token Passing ist ein Zugriffsverfahren für logische Ringtopologien. Dabei gibt es einen Token, der im Ring weitergegeben wird. Nur die Station, die den freien Token besitzt, darf ihn als besetzt markieren und senden. Nach Abschluss des Sendevorgangs gibt die Quellstation wieder einen freien Token in den Ring. Das Verfahren ist deterministisch, weil jede Station berechenbar die Chance zum Senden erhält.",
        "merksatz": "Token Passing = jeder kommt geordnet dran."
    },
    {
        "title": "CSMA/CD vs. Token Passing",
        "body": "CSMA/CD und Token Passing sind zwei grundlegende Zugriffsverfahren. CSMA/CD wird bei logischer Bustopologie eingesetzt und funktioniert nach dem Prinzip: Erst hören, dann senden. Kollisionen sind möglich und müssen erkannt werden. Token Passing wird bei logischer Ringtopologie eingesetzt. Dort darf immer nur die Station mit Token senden. Dadurch gibt es keine klassischen Kollisionen und der Zugriff ist besser berechenbar.",
        "merksatz": "CSMA/CD = Bus, Token Passing = Ring."
    },
    {
        "title": "CSMA/CA",
        "body": "CSMA/CA steht für Carrier Sense Multiple Access with Collision Avoidance. Im Gegensatz zu CSMA/CD geht es hier stärker darum, Kollisionen möglichst zu vermeiden. Bei drahtlosen Netzen können Kollisionen schlechter direkt erkannt werden, deshalb arbeitet WLAN mit Vermeidungsmechanismen. CA bedeutet Collision Avoidance, also Kollisionsvermeidung.",
        "merksatz": "CSMA/CA = Kollisionen vermeiden, typisch WLAN."
    },
    {
        "title": "Ethernet",
        "body": "Ethernet ist eine sehr verbreitete Netzwerktechnik und gehört zur IEEE-802.3-Familie. Klassisch verwendet Ethernet CSMA/CD. Moderne Ethernet-Netze nutzen fast immer Switches. Dadurch gibt es Punkt-zu-Punkt-Verbindungen und Vollduplex, sodass CSMA/CD praktisch keine Rolle mehr spielt. Ethernet gibt es in vielen Varianten, zum Beispiel 10Base2, 10Base5, 10BaseT, 100Base-TX, 100Base-FX, 1000Base-T und 10GBase-X.",
        "merksatz": "Ethernet = IEEE 802.3."
    },
    {
        "title": "10Base2",
        "body": "10Base2 ist eine alte Ethernet-Variante mit Koaxialkabel. Sie wird auch Thinnet oder Cheapernet genannt. Die Übertragungsgeschwindigkeit beträgt 10 Mbit/s. Die maximale Segmentlänge beträgt 185 Meter. 10Base2 nutzt eine physikalische und logische Busstruktur. An den Busenden müssen Abschlusswiderstände eingesetzt werden.",
        "merksatz": "10Base2 = Thinnet, Koax, 185 m."
    },
    {
        "title": "10Base5",
        "body": "10Base5 ist eine alte Ethernet-Variante mit dickem Koaxialkabel. Sie wird auch Thicknet oder Yellow Cable genannt. Die Übertragungsgeschwindigkeit beträgt 10 Mbit/s. Die maximale Segmentlänge beträgt 500 Meter. Die maximale Netzausdehnung kann durch Repeater größer sein. 10Base5 wurde früher im Backbone kleinerer Netze genutzt.",
        "merksatz": "10Base5 = Thicknet, Yellow Cable, 500 m."
    },
    {
        "title": "10BaseT",
        "body": "10BaseT nutzt Twisted-Pair-Kabel und hat 10 Mbit/s Übertragungsgeschwindigkeit. Physikalisch ist es ein Stern, weil alle Geräte an einem Hub oder Switch angeschlossen werden. Mit Hub arbeitet es logisch wie ein Bus, weil alle Signale an alle verteilt werden. Die maximale Entfernung zwischen Hub und Station beträgt 100 Meter.",
        "merksatz": "10BaseT = TP, physikalisch Stern, 100 m."
    },
    {
        "title": "100Base-TX",
        "body": "100Base-TX ist der am weitesten verbreitete Fast-Ethernet-Typ. Die Übertragungsgeschwindigkeit beträgt 100 Mbit/s. Es verwendet Twisted-Pair-Kabel und benötigt zwei Leitungspaare. Die maximale Entfernung zwischen Verteiler und Station beträgt 100 Meter. Physikalisch wird eine Sternstruktur verwendet.",
        "merksatz": "100Base-TX = Fast Ethernet, 100 Mbit/s, 2 Paare."
    },
    {
        "title": "100Base-FX",
        "body": "100Base-FX ist Fast Ethernet über Glasfaser. Die Übertragungsgeschwindigkeit beträgt 100 Mbit/s. Es wird mindestens ein Faserpaar benötigt. 100Base-FX eignet sich für längere Strecken als Twisted Pair und wird besonders für Verbindungen zwischen Verteilern oder für Fiber-to-the-Desk-Szenarien eingesetzt.",
        "merksatz": "FX = Fiber, also Glasfaser."
    },
    {
        "title": "1000Base-T",
        "body": "1000Base-T ist Gigabit Ethernet über Twisted-Pair-Kabel. Es erreicht 1000 Mbit/s beziehungsweise 1 Gbit/s. Dafür werden vier Leitungspaare verwendet. Die maximale Leitungslänge beträgt typischerweise 100 Meter. Gigabit Ethernet nutzt Auto-Negotiation verpflichtend, um Parameter wie Geschwindigkeit und Duplex auszuhandeln.",
        "merksatz": "1000Base-T = 1 Gbit/s über 4 Paare."
    },
    {
        "title": "Token Ring",
        "body": "Token Ring wurde von IBM entwickelt und ist in IEEE 802.5 standardisiert. Klassische Token-Ring-Netze arbeiteten mit 4 oder 16 Mbit/s. Physikalisch wurden sie oft als Stern aufgebaut, logisch jedoch als Ring betrieben. Ein zentraler Ringleitungsverteiler, zum Beispiel eine MSAU, realisiert die Ringstruktur. Token Ring ist heute weitgehend veraltet, aber wichtig zum Verstehen von Token Passing.",
        "merksatz": "Token Ring = physikalisch Stern, logisch Ring."
    },
    {
        "title": "Ethernet-Frame",
        "body": "Ein Ethernet-II-Frame enthält mehrere Felder. Dazu gehören Präambel, Start Frame Delimiter, Ziel-MAC-Adresse, Quell-MAC-Adresse, Typfeld, Daten und FCS. Die Zieladresse steht vor der Quelladresse. Die FCS dient der Fehlerprüfung. Ethernet-Frames werden in Byte angegeben. Die typische Framegröße liegt zwischen 64 und 1518 Byte.",
        "merksatz": "Ethernet-Frame = Byte, Zieladresse vor Quelladresse."
    },
    {
        "title": "OSI-Schicht 1: Physical Layer",
        "body": "Die Bitübertragungsschicht ist OSI-Schicht 1. Sie kümmert sich um die physikalische Übertragung von Bits. Dazu gehören Kabel, Stecker, elektrische oder optische Signale, Signalkodierung, Übertragungsgeschwindigkeit und physikalische Topologie. Geräte wie Repeater und Hubs arbeiten auf dieser Schicht. Schicht 1 versteht keine Adressen und keine Frames.",
        "merksatz": "Layer 1 = Bits, Kabel, Signale."
    },
    {
        "title": "OSI-Schicht 2: Data Link Layer",
        "body": "Die Sicherungsschicht ist OSI-Schicht 2. Sie arbeitet mit Frames und MAC-Adressen. Sie regelt den Zugriff auf das Übertragungsmedium und sorgt für lokale Übertragung zwischen direkt erreichbaren Geräten. Schicht 2 wird in MAC und LLC unterteilt. Bridges und Switches arbeiten auf dieser Schicht. Hardwareadressierung ist ebenfalls eine Funktion der Schicht 2.",
        "merksatz": "Layer 2 = Frames und MAC."
    },
    {
        "title": "OSI-Schicht 3: Network Layer",
        "body": "Die Vermittlungsschicht ist OSI-Schicht 3. Sie arbeitet mit IP-Adressen und Paketen. Ihre wichtigsten Aufgaben sind Netzwerkadressierung, Routing, Wegefindung und Paketweiterleitung. Router arbeiten auf Schicht 3. Statische Routen werden vom Administrator eingerichtet, dynamische Routen werden durch Routing-Protokolle gelernt. Distance-Vector und Link-State sind Verfahren zur Wegefindung.",
        "merksatz": "Layer 3 = IP, Pakete, Routing."
    },
    {
        "title": "OSI-Schicht 4: Transport Layer",
        "body": "Die Transportschicht ist OSI-Schicht 4. Sie ist für Ende-zu-Ende-Kommunikation zwischen Anwendungen zuständig. Typische Protokolle sind TCP und UDP. Auf dieser Schicht werden Portnummern verwendet. Segmente sind die Dateneinheiten der Schicht 4. Aufgaben sind Segmentierung, Transaktionsadressierung und die Zuordnung von Daten zu Anwendungen.",
        "merksatz": "Layer 4 = TCP/UDP, Ports, Segmente."
    },
    {
        "title": "OSI-Schicht 5: Session Layer",
        "body": "Die Sitzungsschicht ist OSI-Schicht 5. Sie verwaltet Kommunikationssitzungen zwischen Anwendungen. Dazu gehören Aufbau, Verwaltung und Beendigung von Sitzungen. Auch Kommunikationssteuerung, zum Beispiel Halbduplex oder Vollduplex auf höherer Ebene, wird dieser Schicht zugeordnet. Sie gehört zu den anwendungsorientierten Schichten.",
        "merksatz": "Layer 5 = Sitzung verwalten."
    },
    {
        "title": "OSI-Schicht 6: Presentation Layer",
        "body": "Die Darstellungsschicht ist OSI-Schicht 6. Sie kümmert sich um die Darstellung und Umwandlung von Datenformaten. Dazu gehören Datenkompression, Zeichensatzumwandlung und Verschlüsselung beziehungsweise Entschlüsselung. Sie sorgt dafür, dass Daten in einem Format vorliegen, das die Anwendung verarbeiten kann.",
        "merksatz": "Layer 6 = Format, Kompression, Verschlüsselung."
    },
    {
        "title": "OSI-Schicht 7: Application Layer",
        "body": "Die Anwendungsschicht ist OSI-Schicht 7. Sie stellt Netzwerkdienste für Anwendungen bereit. Beispiele sind HTTP, FTP, SMTP und DNS. Diese Schicht ist nicht das Programm selbst, sondern die Schnittstelle zu Netzwerkdiensten. Sie gehört zu den anwendungsorientierten Schichten 5 bis 7.",
        "merksatz": "Layer 7 = Netzwerkdienste für Anwendungen."
    },
    {
        "title": "Datenkapselung im OSI-Modell",
        "body": "Beim Senden werden Daten von oben nach unten durch die OSI-Schichten gegeben. Jede Schicht fügt eigene Informationen hinzu. Auf Schicht 4 entstehen Segmente, auf Schicht 3 Pakete, auf Schicht 2 Frames und auf Schicht 1 Bits. Beim Empfänger läuft der Prozess umgekehrt ab: Jede Schicht entfernt ihre Informationen und reicht die Daten nach oben weiter.",
        "merksatz": "Daten → Segmente → Pakete → Frames → Bits."
    },
    {
        "title": "MAC-Adressen",
        "body": "MAC-Adressen gehören zu OSI-Schicht 2. Sie sind 48 Bit beziehungsweise 6 Byte lang. Eine MAC-Adresse ist normalerweise weltweit eindeutig und wird der Netzwerkkarte zugeordnet. MAC-Adressierung gilt nur von Interface zu Interface, also auf dem jeweiligen lokalen Teilstück des Kommunikationswegs. Switches verwenden MAC-Adressen, um Frames gezielt weiterzuleiten.",
        "merksatz": "MAC = Layer 2, 48 Bit, Interface zu Interface."
    },
    {
        "title": "IP-Adressen",
        "body": "IP-Adressen gehören zu OSI-Schicht 3. IPv4-Adressen sind 32 Bit beziehungsweise 4 Byte lang. IPv6-Adressen sind 128 Bit lang. IP-Adressierung gilt von Ende zu Ende, also zwischen Absender und Empfänger. Router verwenden IP-Adressen, um Pakete zwischen Netzwerken weiterzuleiten. Während sich MAC-Adressen auf jedem Teilstück ändern können, bleibt die IP-Adresse grundsätzlich für die Ende-zu-Ende-Kommunikation erhalten.",
        "merksatz": "IP = Layer 3, Ende zu Ende."
    },
    {
        "title": "Portnummern",
        "body": "Portnummern gehören zu OSI-Schicht 4. Sie sind 16 Bit lang und dienen dazu, Datenpakete einem bestimmten Anwendungsprozess zuzuordnen. Eine IP-Adresse identifiziert ein Gerät, eine Portnummer identifiziert den Dienst oder Prozess auf diesem Gerät. TCP und UDP können dieselben Portnummern verwenden, daher muss zusätzlich das Protokoll berücksichtigt werden.",
        "merksatz": "Port = Anwendung auf einem Gerät."
    },
    {
        "title": "Socket",
        "body": "Ein Socket beschreibt eine Kommunikationsbeziehung zwischen zwei Endsystemen. Dazu gehören lokale IP-Adresse und lokaler Port, die IP-Adresse und der Port des Kommunikationspartners sowie das verwendete Protokoll. Ein Socket ist also mehr als nur IP-Adresse plus Port. Er beschreibt die gesamte Verbindung beziehungsweise Kommunikationsbeziehung.",
        "merksatz": "Socket = IP + Port + Gegenstelle + Protokoll."
    },
    {
        "title": "Portbereiche",
        "body": "Portnummern werden in Bereiche eingeteilt. Well Known Ports reichen von 0 bis 1023 und sind für bekannte Serverdienste gedacht. Registered Ports liegen im Bereich 1024 bis 49151 und können für registrierte Dienste verwendet werden. Dynamic oder Private Ports liegen im Bereich 49152 bis 65535 und werden häufig dynamisch für Clientprozesse vergeben.",
        "merksatz": "0-1023 bekannt, 1024-49151 registriert, 49152-65535 dynamisch."
    },
    {
        "title": "Wichtige Ports",
        "body": "Einige Portnummern sollte man kennen. FTP nutzt 20 und 21. SSH nutzt 22. SMTP nutzt 25. DNS nutzt 53. HTTP nutzt 80. POP3 nutzt 110. IMAP nutzt 143. HTTPS nutzt 443. Diese Ports helfen dabei, Dienste eindeutig anzusprechen. Besonders für Prüfungen sind HTTP, HTTPS, DNS, FTP, SSH, SMTP, POP3 und IMAP wichtig.",
        "merksatz": "HTTP 80, HTTPS 443, DNS 53, SSH 22."
    },
    {
        "title": "DNS",
        "body": "DNS bedeutet Domain Name System. DNS löst Namen in IP-Adressen auf. Menschen merken sich Namen wie www.example.de leichter als IP-Adressen. Computer benötigen aber IP-Adressen zur Kommunikation. Deshalb fragt ein Client einen DNS-Server, welche IP-Adresse zu einem bestimmten Namen gehört. DNS nutzt standardmäßig Port 53.",
        "merksatz": "DNS = Name zu IP."
    },
    {
        "title": "DHCP",
        "body": "DHCP bedeutet Dynamic Host Configuration Protocol. Es dient dazu, Netzwerkparameter automatisch zu vergeben. Ein DHCP-Server kann einem Client zum Beispiel IP-Adresse, Subnetzmaske, Standard-Gateway und DNS-Server mitteilen. Dadurch müssen diese Werte nicht manuell auf jedem Gerät eingetragen werden. DHCP ist besonders wichtig in größeren Netzen.",
        "merksatz": "DHCP verteilt IP, Gateway und DNS."
    },
    {
        "title": "NAT und NAPT",
        "body": "NAT steht für Network Address Translation. Dabei werden Adressinformationen in Paketen verändert. Besonders häufig wird NAPT eingesetzt, damit viele Geräte mit privaten IP-Adressen über eine öffentliche IP-Adresse ins Internet gehen können. Dabei werden private Quell-IP-Adressen und Portnummern in eine öffentliche Adresse und passende neue Portnummern übersetzt. Der Router merkt sich diese Zuordnung in einer Tabelle.",
        "merksatz": "NAT = private IP nach öffentliche IP übersetzen."
    },
    {
        "title": "Subnetze",
        "body": "Subnetze dienen dazu, Netzwerke logisch zu unterteilen. Gründe dafür sind bessere Übersichtlichkeit, Trennung nach Standorten, Gebäuden, Etagen oder Abteilungen, höhere Sicherheit und weniger Broadcastverkehr. Zur Kommunikation zwischen Subnetzen benötigt man einen Router oder Layer-3-Switch. Die Subnetzmaske trennt Netzanteil und Hostanteil einer IP-Adresse.",
        "merksatz": "Subnetz = Netz logisch aufteilen."
    },
    {
        "title": "VLANs",
        "body": "VLANs sind virtuelle lokale Netze innerhalb einer physikalischen Netzstruktur. Mit VLANs kann man Geräte logisch trennen, obwohl sie am gleichen Switch oder in der gleichen Verkabelung hängen. VLANs können Broadcastdomänen trennen und die Sicherheit sowie Strukturierung verbessern. Für Kommunikation zwischen VLANs benötigt man Routing, zum Beispiel über einen Router oder Layer-3-Switch.",
        "merksatz": "VLAN = logisches Netz im physischen Netz."
    },
    {
        "title": "Auto-Negotiation",
        "body": "Auto-Negotiation ist ein Verfahren auf Schicht 1. Es dient dazu, automatisch gemeinsame Verbindungsparameter auszuhandeln, zum Beispiel Geschwindigkeit und Duplexmodus. Bei Gigabit Ethernet ist Auto-Negotiation verpflichtend. Wenn die Aushandlung nicht richtig funktioniert, kann es zu Problemen wie falschem Duplexmodus oder schlechter Performance kommen.",
        "merksatz": "Auto-Negotiation = Speed und Duplex automatisch aushandeln."
    },
    {
        "title": "Halbduplex und Vollduplex",
        "body": "Halbduplex bedeutet, dass ein Gerät entweder senden oder empfangen kann, aber nicht beides gleichzeitig. Hubs arbeiten nur mit Halbduplex. Vollduplex bedeutet, dass gleichzeitig gesendet und empfangen werden kann. Switches ermöglichen Vollduplex, weil jeder Port eine eigene Punkt-zu-Punkt-Verbindung bildet. Dadurch steigt die nutzbare Bandbreite deutlich.",
        "merksatz": "Halbduplex = entweder/oder, Vollduplex = gleichzeitig."
    },
    {
        "title": "Bandbreite bei Hub und Switch",
        "body": "Bei einem Hub teilen sich alle Stationen die verfügbare Bandbreite, weil alle am gleichen gemeinsamen Medium hängen. Bei einem Switch erhält jede Station am Port ihre eigene Verbindung. Beispiel: Fünf Stationen an einem 100Base-TX-Hub teilen sich theoretisch die 100 Mbit/s. An einem Switch kann jede Station theoretisch 100 Mbit/s Halbduplex oder 200 Mbit/s Vollduplex nutzen.",
        "merksatz": "Hub teilt Bandbreite, Switch segmentiert."
    },
    {
        "title": "Netzwerkanalyse",
        "body": "Bei der Analyse eines Netzwerks fragt man unter anderem: Welche Gebäude oder Gebäudeteile gibt es? Welche Verteiler, Switches oder Hubs sind vorhanden? Welche Endgeräte stehen in welchem Raum? Welche weiteren Geräte gibt es, zum Beispiel Router, Server, Access Points oder USV? Welche Kabel und Übertragungsmedien sind vorhanden? Außerdem prüft man IP-Adressschema, DHCP, DNS, Standard-Gateway, Subnetze, VLANs und Internetzugang.",
        "merksatz": "Analyse = Geräte, Kabel, Adressen und Dienste erfassen."
    }
];

const questions = [
    {
        "frage": "Welches Zugriffsverfahren nutzt Ethernet?",
        "optionen": [
            "CSMA/CD",
            "Token Passing",
            "Polling",
            "ALOHA"
        ],
        "antwort": "CSMA/CD",
        "tipp": "Ethernet hört erst, bevor gesendet wird.",
        "erklaerung": "Ethernet verwendet bei gemeinsamem Medium CSMA/CD."
    },
    {
        "frage": "Was bedeutet CSMA?",
        "optionen": [
            "Carrier Sense Multiple Access",
            "Collision Signal Media Access",
            "Central Switch Multiple Access",
            "Carrier Session Management Access"
        ],
        "antwort": "Carrier Sense Multiple Access",
        "tipp": "Carrier Sense..",
        "erklaerung": "CSMA bedeutet Carrier Sense Multiple Access."
    },
    {
        "frage": "Was bedeutet CD?",
        "optionen": [
            "Carrier Delay",
            "Collision Detection",
            "Client Distribution",
            "Cable Duplex"
        ],
        "antwort": "Collision Detection",
        "tipp": "Erkennen von Zusammenstößen.",
        "erklaerung": "CD steht für Collision Detection, also Kollisionserkennung."
    },
    {
        "frage": "Wann darf ein Gerät mit dem Zugriffsverfahren CSMA/CD senden?",
        "antwort": [
            "wenn die leitung frei ist",
            "leitung frei"
        ],
        "keywords": [
            [
                "leitung",
                "frei"
            ],
            [
                "medium",
                "frei"
            ],
            [
                "kabel",
                "frei"
            ],
            [
                "uebertragungsmedium",
                "frei"
            ],
            [
                "carrier",
                "sense"
            ],
            [
                "kein",
                "anderes",
                "geraet",
                "sendet"
            ],
            [
                "niemand",
                "sendet"
            ]
        ],
        "tipp": "Carrier Sense!",
        "erklaerung": "Bei CSMA/CD wird zuerst geprüft, ob das Medium frei ist."
    },
    {
        "frage": "Merksatz zu CSMA/CD?",
        "antwort": "Wer zuerst kommt mahlt zuerst",
        "keywords": [
            [
                "wer",
                "zuerst",
                "kommt"
            ],
            [
                "mahlt",
                "zuerst"
            ],
            [
                "zuerst",
                "kommt",
                "mahlt"
            ]
        ],
        "tipp": "Klassischer Unterrichtssatz 😄",
        "erklaerung": "Der Merksatz beschreibt das Prinzip des freien Zugriffs auf das Medium."
    },
    {
        "frage": "Was passiert bei dem Zugriffsverfahren CSMA/CD bei Kollision?",
        "optionen": [
            "Der Router löscht die Pakete dauerhaft",
            "Der Token wird neu erzeugt",
            "Der Switch wird abgeschaltet",
            "Die Stationen warten zufällig und versuchen es erneut"
        ],
        "antwort": "Die Stationen warten zufällig und versuchen es erneut",
        "tipp": "Geräte warten zufällig.",
        "erklaerung": "Nach einer Kollision wird gewartet und später erneut gesendet."
    },
    {
        "frage": "Was sendet eine Station bei erkannter CSMA/CD-Kollision?",
        "optionen": [
            "JAM-Signal",
            "Token",
            "ARP-Paket",
            "DNS-Anfrage"
        ],
        "antwort": "JAM-Signal",
        "tipp": "Damit alle die Kollision bemerken.",
        "erklaerung": "Das JAM-Signal signalisiert anderen Stationen die Kollision."
    },
    {
        "frage": "CSMA/CD wird besonders bei welcher logischen Topologie benötigt?",
        "optionen": [
            "Logischer Ring",
            "Logischer Bus",
            "Punkt-zu-Punkt Vollduplex",
            "Client-Server"
        ],
        "antwort": "Logischer Bus",
        "tipp": "Mehrere Stationen teilen sich ein Medium.",
        "erklaerung": "CSMA/CD wird bei gemeinsam genutztem Medium benötigt."
    },
    {
        "frage": "Welches Netzwerk nutzt Token Passing?",
        "optionen": [
            "Ethernet",
            "Token Ring",
            "WLAN",
            "Bluetooth"
        ],
        "antwort": "Token Ring",
        "tipp": "Ringförmige Netze.",
        "erklaerung": "Token Passing gehört klassisch zu Token Ring."
    },
    {
        "frage": "Wer darf beim Token Passing verfahren senden?",
        "optionen": [
            "Alle gleichzeitig",
            "Nur der Router",
            "Der Token-Besitzer",
            "Nur der Server"
        ],
        "antwort": "Der Token-Besitzer",
        "tipp": "Nur EIN Gerät!",
        "erklaerung": "Nur die Station mit Token darf senden."
    },
    {
        "frage": "Merksatz vom Token Passing verfahren?",
        "antwort": "Nur wer den Token hat darf senden",
        "keywords": [
            [
                "token",
                "hat",
                "darf",
                "senden"
            ],
            [
                "nur",
                "token",
                "senden"
            ],
            [
                "wer",
                "token",
                "hat"
            ]
        ],
        "tipp": "Nur wer den Token hat darf",
        "erklaerung": "Der Token regelt eindeutig, wer senden darf."
    },
    {
        "frage": "Welche logische Topologie nutzt Token Ring?",
        "optionen": [
            "Bus",
            "Stern",
            "Ring",
            "Masche"
        ],
        "antwort": "Ring",
        "tipp": "Der Name sagt es fast.",
        "erklaerung": "Token Ring arbeitet logisch als Ring."
    },
    {
        "frage": "Welche physikalische Topologie kann Token Ring trotzdem haben?",
        "optionen": [
            "Stern",
            "Bus",
            "Baum",
            "Mesh"
        ],
        "antwort": "Stern",
        "tipp": "MSAU/Ringleitungsverteiler.",
        "erklaerung": "Token Ring kann physikalisch sternförmig über einen Verteiler aufgebaut sein."
    },
    {
        "frage": "Wie viele OSI Schichten gibt es?",
        "optionen": [
            "4",
            "5",
            "7",
            "8"
        ],
        "antwort": "7",
        "tipp": "OSI = 7 Layer",
        "erklaerung": "Das OSI-Modell hat sieben Schichten."
    },
    {
        "frage": "Layer 1 englisch?",
        "optionen": [
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "Physical Layer"
        ],
        "antwort": "Physical Layer",
        "tipp": "Physik → Kabel",
        "erklaerung": "Layer 1 heißt Physical Layer."
    },
    {
        "frage": "Layer 2 englisch?",
        "optionen": [
            "Network Layer",
            "Session Layer",
            "Data Link Layer",
            "Application Layer"
        ],
        "antwort": "Data Link Layer",
        "tipp": "MAC Ebene",
        "erklaerung": "Layer 2 heißt Data Link Layer."
    },
    {
        "frage": "Layer 3 englisch?",
        "optionen": [
            "Transport Layer",
            "Physical Layer",
            "Network Layer",
            "Presentation Layer"
        ],
        "antwort": "Network Layer",
        "tipp": "IP Routing",
        "erklaerung": "Layer 3 heißt Network Layer."
    },
    {
        "frage": "Layer 4 englisch?",
        "optionen": [
            "Data Link Layer",
            "Application Layer",
            "Transport Layer",
            "Physical Layer"
        ],
        "antwort": "Transport Layer",
        "tipp": "Ports!",
        "erklaerung": "Layer 4 heißt Transport Layer."
    },
    {
        "frage": "Layer 7 englisch?",
        "optionen": [
            "Network Layer",
            "Application Layer",
            "Network Layer",
            "Transport Layer",
            "Session Layer"
        ],
        "antwort": "Application Layer",
        "tipp": "Programme",
        "erklaerung": "Layer 7 heißt Application Layer."
    },
    {
        "frage": "Layer 1 deutsch?",
        "optionen": [
            "Sicherungsschicht",
            "Vermittlungsschicht",
            "Bitübertragungsschicht",
            "Transportschicht"
        ],
        "antwort": "Bitübertragungsschicht",
        "tipp": "Bits übertragen",
        "erklaerung": "Layer 1 ist die Bitübertragungsschicht."
    },
    {
        "frage": "Layer 2 deutsch?",
        "optionen": [
            "Sicherungsschicht",
            "Vermittlungsschicht",
            "Anwendungsschicht",
            "Sitzungsschicht"
        ],
        "antwort": "Sicherungsschicht",
        "tipp": "Diese schicht sichert",
        "erklaerung": "Layer 2 ist die Sicherungsschicht."
    },
    {
        "frage": "Layer 3 deutsch?",
        "optionen": [
            "Transportschicht",
            "Darstellungsschicht",
            "Vermittlungsschicht",
            "Bitübertragungsschicht"
        ],
        "antwort": "Vermittlungsschicht",
        "tipp": "Routing",
        "erklaerung": "Layer 3 ist die Vermittlungsschicht."
    },
    {
        "frage": "Layer 4 deutsch?",
        "optionen": [
            "Netzzugangsschicht",
            "Transportschicht",
            "Sicherungsschicht",
            "Anwendungsschicht"
        ],
        "antwort": "Transportschicht",
        "tipp": "Ports!",
        "erklaerung": "Layer 4 ist die Transportschicht."
    },
    {
        "frage": "Layer 7 deutsch?",
        "optionen": [
            "Anwendungsschicht",
            "Bitübertragungsschicht",
            "Vermittlungsschicht",
            "Sicherungsschicht"
        ],
        "antwort": "Anwendungsschicht",
        "tipp": "Apps",
        "erklaerung": "Layer 7 ist die Anwendungsschicht."
    },
    {
        "frage": "Welche Adressierung gehört zu Layer 4?",
        "optionen": [
            "MAC-Adressen",
            "Portnummern",
            "IP-Adressen",
            "VLAN-IDs"
        ],
        "antwort": "Portnummern",
        "tipp": "Transport Layer.",
        "erklaerung": "Portnummern gehören zur Transportschicht."
    },
    {
        "frage": "Welche Adresse nutzt Layer 2?",
        "optionen": [
            "IP Adresse",
            "Portnummer",
            "MAC-Adresse",
            "DNS Name"
        ],
        "antwort": "MAC Adresse",
        "tipp": "Switch arbeitet damit",
        "erklaerung": "Layer 2 nutzt MAC-Adressen."
    },
    {
        "frage": "Welche Adresse nutzt Layer 3?",
        "optionen": [
            "MAC Adresse",
            "IP Adresse",
            "Portnummer",
            "RJ-45"
        ],
        "antwort": "IP Adresse",
        "tipp": "Router arbeitet damit",
        "erklaerung": "Layer 3 nutzt IP-Adressen."
    },
    {
        "frage": "MAC Länge?",
        "optionen": [
            "32 bit / 4 byte",
            "48 bit / 6 byte",
            "128 bit / 16 byte",
            "16 bit / 2 byte"
        ],
        "antwort": "48 bit / 6 byte",
        "tipp": "6 Byte",
        "erklaerung": "MAC-Adressen sind 48 Bit beziehungsweise 6 Byte lang."
    },
    {
        "frage": "IPv4 Länge?",
        "optionen": [
            "48 bit / 6 byte",
            "128 bit / 16 byte",
            "32 bit / 4 byte",
            "64 bit / 8 byte"
        ],
        "antwort": "32 bit / 4 byte",
        "tipp": "4 Byte",
        "erklaerung": "IPv4-Adressen sind 32 Bit beziehungsweise 4 Byte lang."
    },
    {
        "frage": "Ist die MAC Addressierung eindeutig weltweit?",
        "optionen": [
            "ja",
            "nein"
        ],
        "antwort": "ja",
        "tipp": "Hersteller vergeben sie",
        "erklaerung": "MAC-Adressen sollen weltweit eindeutig sein."
    },
    {
        "frage": "IPv6 Länge?",
        "optionen": [
            "32 bit / 4 byte",
            "48 bit / 6 byte",
            "128 bit / 16 byte",
            "16 bit / 2 byte"
        ],
        "antwort": "128 bit / 16 byte",
        "tipp": "Deutlich länger als IPv4.",
        "erklaerung": "IPv6-Adressen sind 128 Bit lang."
    },
    {
        "frage": "Was macht ein Hub?",
        "optionen": [
            "IP-Pakete routen",
            "Domains auflösen",
            "Ports filtern",
            "Signal verstärken und an Ports weiterleiten"
        ],
        "antwort": "Signal verstärken und an Ports weiterleiten",
        "tipp": "Layer 1",
        "erklaerung": "Ein Hub ist ein Multiport-Repeater auf Layer 1."
    },
    {
        "frage": "Was macht ein Switch?",
        "optionen": [
            "IP-Adressen vergeben",
            "DNS-Namen auflösen",
            "Glasfasern spleißen",
            "Geräte im LAN verbinden"
        ],
        "antwort": "Geräte im LAN verbinden",
        "tipp": "Layer 2",
        "erklaerung": "Ein Switch verbindet Geräte im LAN und arbeitet mit MAC-Adressen."
    },
    {
        "frage": "Was macht ein Router?",
        "optionen": [
            "Netzwerke verbinden",
            "Signale nur verstärken",
            "Nur MAC-Adressen lernen",
            "Kabel crimpen"
        ],
        "antwort": "Netzwerke verbinden",
        "tipp": "Layer 3",
        "erklaerung": "Ein Router verbindet Netze und leitet IP-Pakete weiter."
    },
    {
        "frage": "Was macht ein Gateway?",
        "antwort": [
            "verbindet verschiedene protokolle",
            "protokolle verbinden"
        ],
        "keywords": [
            [
                "protokolle",
                "verbinden"
            ],
            [
                "protokolle",
                "uebersetzen"
            ],
            [
                "uebersetzer"
            ],
            [
                "gateway"
            ]
        ],
        "tipp": "Übersetzer",
        "erklaerung": "Ein Gateway verbindet beziehungsweise übersetzt unterschiedliche Protokolle oder Systeme."
    },
    {
        "frage": "Was macht ein Repeater?",
        "optionen": [
            "Signal regenerieren",
            "IP-Adresse vergeben",
            "Ports filtern",
            "DNS auflösen"
        ],
        "antwort": "Signal regenerieren",
        "tipp": "Signal auffrischen",
        "erklaerung": "Repeater verstärken und regenerieren Signale."
    },
    {
        "frage": "Auf welchem Layer arbeitet eine Switch?",
        "optionen": [
            "1",
            "2",
            "3",
            "4"
        ],
        "antwort": "2",
        "tipp": "MAC Ebene",
        "erklaerung": "Ein normaler Switch arbeitet auf Layer 2."
    },
    {
        "frage": "Router arbeitet auf welchem Layer?",
        "optionen": [
            "1",
            "2",
            "3",
            "4"
        ],
        "antwort": "3",
        "tipp": "IP Ebene",
        "erklaerung": "Router arbeiten auf Layer 3."
    },
    {
        "frage": "Welche Geräte arbeiten auf Layer 3?",
        "optionen": [
            "Switch",
            "Router",
            "Layer-3-Switch",
            "Hub"
        ],
        "antwort": [
            "Router",
            "Layer-3-Switch"
        ],
        "multi": true,
        "tipp": "IP Ebene, mehrere Antworten.",
        "erklaerung": "Router und Layer-3-Switch arbeiten auf Layer 3."
    },
    {
        "frage": "Welche Geräte arbeiten auf Layer 1?",
        "optionen": [
            "Hub",
            "Router",
            "Bridge",
            "Repeater"
        ],
        "antwort": [
            "Repeater",
            "Hub"
        ],
        "multi": true,
        "tipp": "Signale, keine Adressen.",
        "erklaerung": "Repeater und Hub arbeiten auf Layer 1."
    },
    {
        "frage": "Welche Geräte arbeiten auf Layer 2?",
        "optionen": [
            "Bridge",
            "Hub",
            "Switch",
            "Router"
        ],
        "antwort": [
            "Bridge",
            "Switch"
        ],
        "multi": true,
        "tipp": "MAC-Adressen.",
        "erklaerung": "Bridge und Switch arbeiten auf Layer 2."
    },
    {
        "frage": "Switch speichert welche Tabelle?",
        "optionen": [
            "Routing Tabelle",
            "MAC Tabelle",
            "DNS Tabelle",
            "NAT Tabelle"
        ],
        "antwort": "MAC Tabelle",
        "tipp": "Lernt MAC Adressen",
        "erklaerung": "Switches lernen MAC-Adressen in einer MAC-Tabelle."
    },
    {
        "frage": "Switch ermöglicht welchen Duplex?",
        "optionen": [
            "Nur Halbduplex",
            "Vollduplex",
            "Simplex",
            "Keinen"
        ],
        "antwort": "Vollduplex",
        "tipp": "Gleichzeitig senden+empfangen",
        "erklaerung": "Mit Switches ist Vollduplex möglich."
    },
    {
        "frage": "Switch trennt welche Domänen?",
        "optionen": [
            "Broadcastdomänen",
            "DNS-Zonen",
            "Kollisionsdomänen",
            "IP-Klassen"
        ],
        "antwort": "Kollisionsdomänen",
        "tipp": "Jeder Port eigene",
        "erklaerung": "Jeder Switch-Port bildet eine eigene Kollisionsdomäne."
    },
    {
        "frage": "Router trennt welche Domänen?",
        "optionen": [
            "Kollisionsdomänen",
            "Ports",
            "Broadcastdomänen",
            "Frames"
        ],
        "antwort": "Broadcastdomänen",
        "tipp": "Broadcast stoppt hier",
        "erklaerung": "Router trennen Broadcastdomänen."
    },
    {
        "frage": "Router nutzen welche Tabellen?",
        "optionen": [
            "Routingtabellen",
            "MAC Tabellen",
            "DNS Tabellen",
            "ARP Tabellen nur alleine"
        ],
        "antwort": "Routingtabellen",
        "tipp": "Wege finden",
        "erklaerung": "Router verwenden Routingtabellen zur Wegefindung."
    },
    {
        "frage": "Router macht NAT?",
        "optionen": [
            "ja",
            "nein"
        ],
        "antwort": "ja",
        "tipp": "Private → öffentliche IP",
        "erklaerung": "Router können NAT zur Adressübersetzung verwenden."
    },
    {
        "frage": "Router Standard Gateway? (Ja/Nein)",
        "optionen": [
            "ja",
            "nein"
        ],
        "antwort": "ja",
        "tipp": "Tor zum Internet",
        "erklaerung": "Das Standardgateway ist meistens ein Router."
    },
    {
        "frage": "Switching Verfahren mit geringster Latenz?",
        "optionen": [
            "Store and Forward",
            "Cut Through",
            "Fragment Free"
        ],
        "antwort": "Cut Through",
        "tipp": "Nur Zieladresse lesen",
        "erklaerung": "Cut Through hat die geringste Latenz."
    },
    {
        "frage": "Switching Verfahren mit Fehlerprüfung?",
        "optionen": [
            "Store and Forward",
            "Cut Through",
            "Fragment Free"
        ],
        "antwort": "Store and Forward",
        "tipp": "Kompletten Frame prüfen",
        "erklaerung": "Store and Forward prüft den kompletten Frame."
    },
    {
        "frage": "Welches Switching-Verfahren prüft die ersten 64 Byte?",
        "optionen": [
            "Fragment Free",
            "Cut Through",
            "Store and Forward"
        ],
        "antwort": "Fragment Free",
        "tipp": "Nur die ersten byte werden geprüft",
        "erklaerung": "Fragment Free liest die ersten 64 Byte."
    },
    {
        "frage": "Fragment Free liest wie viel von einem frame bevor es gesendet wird?",
        "optionen": [
            "6 Byte",
            "64 Byte",
            "1518 Byte",
            "1500 Byte"
        ],
        "antwort": "64 Byte",
        "tipp": "Erste 64 werden geprüft",
        "erklaerung": "Fragment Free liest die ersten 64 Byte."
    },
    {
        "frage": "Welches Verfahren liest den gesamten Frame?",
        "optionen": [
            "Store and Forward",
            "Cut Through",
            "Fragment Free"
        ],
        "antwort": "Store and Forward",
        "tipp": "Lagerung.",
        "erklaerung": "Store and Forward liest und prüft den gesamten Frame."
    },
    {
        "frage": "Fast Ethernet Geschwindigkeit?",
        "optionen": [
            "10 Mbit",
            "100 Mbit",
            "1000 Mbit",
            "10 Gbit"
        ],
        "antwort": "100 Mbit",
        "tipp": "100Base-T",
        "erklaerung": "Fast Ethernet arbeitet mit 100 Mbit/s."
    },
    {
        "frage": "Gigabit Ethernet?",
        "optionen": [
            "100 Mbit",
            "1000 Mbit / 1 Gbit",
            "10 Mbit",
            "25 Gbit"
        ],
        "antwort": "1000 Mbit / 1 Gbit",
        "tipp": "1000Base-T",
        "erklaerung": "Gigabit Ethernet hat 1000 Mbit/s beziehungsweise 1 Gbit/s."
    },
    {
        "frage": "Was ist die Ethernet Frame Einheit?",
        "optionen": [
            "Bit",
            "Byte",
            "Volt"
        ],
        "antwort": "Byte",
        "tipp": "Steht in Notizen!",
        "erklaerung": "Ethernet-Frames werden in Byte angegeben."
    },
    {
        "frage": "Min Frame Größe?",
        "optionen": [
            "32 Byte",
            "64 Byte",
            "128 Byte",
            "1518 Byte"
        ],
        "antwort": "64 Byte",
        "tipp": "Ethernet Standard",
        "erklaerung": "Ein Ethernet-Frame ist mindestens 64 Byte groß."
    },
    {
        "frage": "Max Frame Größe?",
        "optionen": [
            "150 Byte",
            "64 Byte",
            "1518 Byte",
            "9000 Byte"
        ],
        "antwort": "1518 Byte",
        "tipp": "Ethernet II Frame, zahl liegt im 1000 bereich",
        "erklaerung": "Der normale Ethernet-II-Frame ist maximal 1518 Byte groß."
    },
    {
        "frage": "100Base-TX nutzt typischerweise welches Kabel?",
        "optionen": [
            "UTP/STP Kategorie 5",
            "Koax RG58",
            "Nur Singlemode-LWL",
            "Telefon RJ-11"
        ],
        "antwort": "UTP/STP Kategorie 5",
        "tipp": "Twisted Pair.",
        "erklaerung": "100Base-TX verwendet Twisted-Pair-Kabel, typischerweise Kategorie 5."
    },
    {
        "frage": "100Base-FX nutzt welches Medium?",
        "optionen": [
            "Koaxialkabel",
            "Glasfaser",
            "Funk",
            "RJ-11 Telefonkabel"
        ],
        "antwort": "Glasfaser",
        "tipp": "FX wie Fiber.",
        "erklaerung": "100Base-FX verwendet Glasfaser."
    },
    {
        "frage": "Welche Standards gehören zu Fast Ethernet?",
        "optionen": [
            "100Base-FX",
            "10Base2",
            "100Base-TX",
            "Token Ring"
        ],
        "antwort": [
            "100Base-TX",
            "100Base-FX"
        ],
        "multi": true,
        "tipp": "Beide beginnen mit 100Base.",
        "erklaerung": "100Base-TX und 100Base-FX gehören zu Fast Ethernet."
    },
    {
        "frage": "Auto Negotiation arbeitet auf Layer?",
        "optionen": [
            "1",
            "2",
            "3",
            "4"
        ],
        "antwort": "1",
        "tipp": "Physical layer",
        "erklaerung": "Auto Negotiation arbeitet auf Layer 1."
    },
    {
        "frage": "Auto Negotiation verhandelt was?",
        "optionen": [
            "Duplex",
            "DNS-Server",
            "Geschwindigkeit",
            "HTTP-Port"
        ],
        "antwort": [
            "Geschwindigkeit",
            "Duplex"
        ],
        "multi": true,
        "tipp": "Speed + Duplex",
        "erklaerung": "Auto Negotiation verhandelt Geschwindigkeit und Duplex."
    },
    {
        "frage": "Ist Bei Gigabit Ethernet Auto Negotiation pflicht oder nicht? (Nicht/Pflicht)",
        "optionen": [
            "pflicht",
            "nicht"
        ],
        "antwort": "pflicht",
        "tipp": "Nicht optional!",
        "erklaerung": "Bei Gigabit Ethernet ist Auto Negotiation verpflichtend."
    },
    {
        "frage": "LWL bedeutet?",
        "antwort": [
            "Lichtwellenleiter",
            "Licht Wellen Leiter",
            "Licht-Wellen-Leiter"
        ],
        "keywords": [
            [
                "lichtwellenleiter"
            ],
            [
                "licht",
                "wellen",
                "leiter"
            ],
            [
                "glasfaser"
            ]
        ],
        "tipp": "Glasfaser",
        "erklaerung": "LWL steht für Lichtwellenleiter."
    },
    {
        "frage": "Signal Glasfaser?",
        "optionen": [
            "Licht",
            "Elektronen"
        ],
        "antwort": "Licht",
        "tipp": "Optisch",
        "erklaerung": "Glasfaser überträgt Signale optisch mit Licht."
    },
    {
        "frage": "Was ist der Vorteil von Glasfaser?",
        "optionen": [
            "Sehr billig zu konfektionieren",
            "Immer mechanisch unempfindlich",
            "Nur für kurze Strecken",
            "Hohe Bandbreite und störsicher"
        ],
        "antwort": "Hohe Bandbreite und störsicher",
        "tipp": "Schnell + störfrei",
        "erklaerung": "Glasfaser bietet hohe Bandbreiten, Reichweiten und ist unempfindlich gegen elektromagnetische Störungen."
    },
    {
        "frage": "Warum braucht man bei Glasfaser oft zwei Fasern?",
        "optionen": [
            "Weil Kupfer fehlt",
            "Wegen DNS",
            "Die Übertragung ist unidirektional",
            "Damit CSMA/CD funktioniert"
        ],
        "antwort": "Die Übertragung ist unidirektional",
        "tipp": "Eine Richtung pro Faser.",
        "erklaerung": "Glasfaserübertragung ist oft unidirektional, daher braucht man für Hin- und Rückweg zwei Fasern."
    },
    {
        "frage": "Was ist die Aufgabe von DNS?",
        "optionen": [
            "IP-Adressen automatisch vergeben",
            "Domain zu IP auflösen",
            "Frames prüfen",
            "Kabel abschließen"
        ],
        "antwort": "Domain zu IP auflösen",
        "tipp": "www → IP",
        "erklaerung": "DNS übersetzt Domainnamen in IP-Adressen."
    },
    {
        "frage": "DHCP Bedeutung?",
        "antwort": "Dynamic Host Configuration Protocol",
        "keywords": [
            [
                "dynamic",
                "host",
                "configuration",
                "protocol"
            ],
            [
                "dhcp"
            ],
            [
                "automatische",
                "ip"
            ]
        ],
        "tipp": "Vergibt IP automatisch",
        "erklaerung": "DHCP steht für Dynamic Host Configuration Protocol."
    },
    {
        "frage": "DHCP vergibt was? (Mehrere Antworten sind erlaubt)",
        "optionen": [
            "ip adresse",
            "gateway",
            "dns"
        ],
        "antwort": [
            "ip adresse",
            "gateway",
            "dns"
        ],
        "multi": true,
        "tipp": "Netzwerkparameter",
        "erklaerung": "DHCP kann IP-Adresse, Gateway und DNS-Server vergeben."
    },
    {
        "frage": "HTTP Standard Port?",
        "optionen": [
            "443",
            "53",
            "80",
            "22"
        ],
        "antwort": "80",
        "tipp": "Web",
        "erklaerung": "HTTP verwendet standardmäßig Port 80."
    },
    {
        "frage": "HTTPS Standard Port?",
        "optionen": [
            "443",
            "80",
            "53",
            "25"
        ],
        "antwort": "443",
        "tipp": "Sicher",
        "erklaerung": "HTTPS verwendet standardmäßig Port 443."
    },
    {
        "frage": "DNS Standard Port?",
        "optionen": [
            "80",
            "443",
            "21",
            "53"
        ],
        "antwort": "53",
        "tipp": "Namensauflösung",
        "erklaerung": "DNS verwendet standardmäßig Port 53."
    },
    {
        "frage": "FTP Standard Port?",
        "optionen": [
            "21",
            "22",
            "25",
            "110"
        ],
        "antwort": "21",
        "tipp": "Dateien",
        "erklaerung": "FTP verwendet standardmäßig Port 21."
    },
    {
        "frage": "SSH Standard Port?",
        "optionen": [
            "21",
            "22",
            "80",
            "443"
        ],
        "antwort": "22",
        "tipp": "Remote Login",
        "erklaerung": "SSH verwendet standardmäßig Port 22."
    },
    {
        "frage": "SMTP Standard Port?",
        "optionen": [
            "110",
            "53",
            "25",
            "443"
        ],
        "antwort": "25",
        "tipp": "Mail senden",
        "erklaerung": "SMTP verwendet standardmäßig Port 25."
    },
    {
        "frage": "POP3 Standard Port?",
        "optionen": [
            "25",
            "110",
            "21",
            "22"
        ],
        "antwort": "110",
        "tipp": "Mail empfangen",
        "erklaerung": "POP3 verwendet standardmäßig Port 110."
    },
    {
        "frage": "Portnummern gehören zu welcher OSI-Schicht?",
        "optionen": [
            "Layer 1",
            "Layer 2",
            "Layer 3",
            "Layer 4"
        ],
        "antwort": "Layer 4",
        "tipp": "Transport Layer.",
        "erklaerung": "Portnummern dienen der Adressierung auf Schicht 4."
    },
    {
        "frage": "Welche Protokolle gehören zur Transportschicht?",
        "optionen": [
            "TCP",
            "UDP",
            "IP",
            "ARP"
        ],
        "antwort": [
            "TCP",
            "UDP"
        ],
        "multi": true,
        "tipp": "Zwei bekannte Layer-4-Protokolle.",
        "erklaerung": "TCP und UDP gehören zur Transportschicht."
    },
    {
        "frage": "Welche Topologie nutzt einen zentralen Verteiler, z.B. Switch oder Hub?",
        "optionen": [
            "Bus",
            "Stern",
            "Ring"
        ],
        "antwort": "Stern",
        "tipp": "Alle Geräte laufen zu einem Mittelpunkt.",
        "erklaerung": "Die Sterntopologie nutzt einen zentralen Verteiler."
    },
    {
        "frage": "Welche Topologie verbindet alle Stationen zu einem geschlossenen Kreis?",
        "optionen": [
            "Bus",
            "Ring",
            "Stern"
        ],
        "antwort": "Ring",
        "tipp": "Die Daten laufen von Station zu Station weiter.",
        "erklaerung": "Die Ringtopologie verbindet Stationen zu einem Kreis."
    },
    {
        "frage": "Welche Topologie verwendet ein gemeinsames Übertragungsmedium, das sich alle Geräte teilen?",
        "optionen": [
            "Bus",
            "Ring",
            "Stern"
        ],
        "antwort": "Bus",
        "tipp": "Ein gemeinsames Kabel wird von allen genutzt.",
        "erklaerung": "Die Bustopologie nutzt ein gemeinsames Übertragungsmedium."
    },
    {
        "frage": "Welche Topologie ist heute physikalisch in LANs am gebräuchlichsten?",
        "optionen": [
            "Masche",
            "Stern",
            "Bus",
            "Ring"
        ],
        "antwort": "Stern",
        "tipp": "Switch in der Mitte.",
        "erklaerung": "Moderne LANs verwenden meist eine physikalische Sterntopologie."
    }
        /* ================= NEUE FRAGEN AUS LÖSUNGSBLÄTTERN ================= */

/* ===== GRUNDLAGEN / TOPOLOGIEN ===== */
    ,{

    frage:"Wann spricht man von einem Netzwerk?",
    optionen:[
    "Wenn PCs an einem Hub angeschlossen sind",
    "Wenn PCs verbunden sind und miteinander kommunizieren können",
    "Wenn Benutzer Dateien austauschen können",
    "Wenn alle PCs die gleiche Netzwerkkarte besitzen"
    ],
    antwort:"Wenn PCs verbunden sind und miteinander kommunizieren können",
    tipp:"Es geht nicht nur um Verbindung, sondern um Kommunikation."
    },

    {
    frage:"Welches Vernetzungs-Grundkonzept arbeitet nach dem Prinzip der Gleichberechtigung?",
    optionen:["Client-Server","Peer-to-Peer","Workstation-Server","Point-to-Point"],
    antwort:"Peer-to-Peer",
    tipp:"Alle Rechner sind grundsätzlich gleichberechtigt."
    },

    {
    frage:"Welches Vernetzungs-Grundkonzept arbeitet nach dem Prinzip der Aufgabenteilung?",
    optionen:["Peer-to-Peer","Client-Server","Point-to-Point","Workstation-Server"],
    antwort:"Client-Server",
    tipp:"Ein zentraler Rechner stellt Dienste bereit."
    },

    {
    frage:"Was stellt ein Server zentral bereit?",
    optionen:[
    "Ressourcen und Dienstleistungen",
    "Nur IP-Adressen",
    "Nur Netzwerkkabel",
    "Nur MAC-Adressen"
    ],
    antwort:"Ressourcen und Dienstleistungen",
    tipp:"Server = zentraler Anbieter."
    },

    {
    frage:"Was versteht man unter Funktionsverbund?",
    optionen:[
    "Gemeinsame Nutzung der Ressourcen",
    "Gemeinsame Nutzung des Server-Prozessors",
    "Gemeinsame Nutzung des Datenbestandes",
    "Gemeinsame Nutzung der IP-Adresse"
    ],
    antwort:"Gemeinsame Nutzung der Ressourcen",
    tipp:"Funktion = Hardware/Software/Ressourcen nutzen."
    },

    {
    frage:"Physikalische und logische Topologie eines Netzwerks...",
    optionen:[
    "sind immer identisch",
    "sind immer verschieden",
    "können identisch oder verschieden sein",
    "sind nie voneinander abhängig"
    ],
    antwort:"können identisch oder verschieden sein",
    tipp:"Beispiel: physikalischer Stern mit Hub kann logisch Bus sein."
    },

    {
    frage:"Wie wird eine logische Bustopologie auch genannt?",
    optionen:["shared media","splitted media","shifted media","private media"],
    antwort:"shared media",
    tipp:"Alle teilen sich ein gemeinsames Medium."
    },

    {
    frage:"Wodurch wird die Länge des Übertragungsmediums bei Bus-Struktur hauptsächlich begrenzt?",
    optionen:["Signaldämpfung","Signalverstärkung","IP-Adresse","MAC-Adresse"],
    antwort:"Signaldämpfung",
    tipp:"Signale werden mit der Strecke schwächer."
    },

    {
    frage:"Wozu dienen Abschlusswiderstände bei einer Bus-Topologie?",
    optionen:[
    "Sie verhindern Signalreflexionen",
    "Sie erhöhen die Signalreflexion",
    "Sie vergeben IP-Adressen",
    "Sie erhöhen die Bandbreite"
    ],
    antwort:"Sie verhindern Signalreflexionen",
    tipp:"Am Busende darf das Signal nicht zurückgeworfen werden."
    },

    {
    frage:"Welche physikalische Topologie ist heute am gebräuchlichsten?",
    optionen:["Ring","Bus","Stern","Masche"],
    antwort:"Stern",
    tipp:"Fast alles läuft heute über Switches."
    },

    {
    frage:"Bis zu welcher maximalen Anzahl an Stationen ist Peer-to-Peer sinnvoll?",
    optionen:["5","10","20","50"],
    antwort:"10",
    tipp:"Peer-to-Peer ist eher für kleine Netze."
    },

    {
    frage:"Welche Nachteile hat ein Peer-to-Peer-Netzwerk?",
    optionen:[
    "Hoher Koordinationsaufwand und geringe Sicherheitsfunktionen",
    "Hohe Serverkosten",
    "Keine Rechner können Ressourcen freigeben",
    "Es benötigt immer einen Domänencontroller"
    ],
    antwort:"Hoher Koordinationsaufwand und geringe Sicherheitsfunktionen",
    tipp:"Ohne zentrale Verwaltung wird es schnell unübersichtlich."
    },

    /* ===== ÜBERTRAGUNGSMEDIEN ===== */

    {
    frage:"Welche Einheit hat die Übertragungsgeschwindigkeit?",
    optionen:["Byte pro Sekunde","Bit pro Sekunde","Dezibel","Blöcke pro Sekunde"],
    antwort:"Bit pro Sekunde",
    tipp:"Netzwerkgeschwindigkeit wird meistens in bit/s angegeben."
    },

    {
    frage:"Wie nennt man es, wenn sich Signale benachbarter Adernpaare gegenseitig beeinflussen?",
    optionen:["Übersprechen","Signaldämpfung","Signalreflexion","Multiplexing"],
    antwort:"Übersprechen",
    tipp:"Englisch: Crosstalk."
    },

    {
    frage:"Wie ist ein Koaxialkabel von innen nach außen aufgebaut?",
    optionen:[
    "Innenleiter, Isolierschicht, Abschirmung, Außenmantel",
    "Isolierschicht, Innenleiter, Abschirmung, Außenmantel",
    "Innenleiter, Abschirmung, Isolierschicht, Außenmantel",
    "Abschirmung, Innenleiter, Isolierschicht, Außenmantel"
    ],
    antwort:"Innenleiter, Isolierschicht, Abschirmung, Außenmantel",
    tipp:"Erst kommt der Leiter, dann Isolation, dann Schirm."
    },

    {
    frage:"Welche Koaxialkabel-Ausführung wurde für Ethernet verwendet?",
    optionen:["RG 57","RG 58","RG 59","RG 62"],
    antwort:"RG 58",
    tipp:"Thin Ethernet / BNC."
    },

    {
    frage:"Welche Impedanz hat RG-58-Koaxialkabel für Thin Ethernet?",
    optionen:["5 Ohm","15 Ohm","50 Ohm","150 Ohm"],
    antwort:"50 Ohm",
    tipp:"Merke: RG 58 = 50 Ohm."
    },

    {
    frage:"Welcher Steckertyp gehört zu Koaxialkabeln im alten Ethernet?",
    optionen:["RJ-45","RJ-11","BNC","LC"],
    antwort:"BNC",
    tipp:"BNC wurde bei Koax/Thinnet genutzt."
    },

    {
    frage:"Warum sind Twisted-Pair-Adern verdrillt?",
    optionen:[
    "Um Störeinflüsse zu vermindern",
    "Um Signalreflexionen zu verstärken",
    "Um mehr Strom zu übertragen",
    "Um IP-Adressen zu speichern"
    ],
    antwort:"Um Störeinflüsse zu vermindern",
    tipp:"Verdrillung hilft gegen Störungen und Übersprechen."
    },

    {
    frage:"Für welche physikalische Topologie wird Twisted-Pair-Kabel häufig eingesetzt?",
    optionen:["Bus","Stern","Ring","Masche"],
    antwort:"Stern",
    tipp:"PC → Switch."
    },

    {
    frage:"Wie lang darf ein TP-Kabel zwischen Verteiler und Computer maximal sein?",
    optionen:["10 m","100 m","185 m","500 m"],
    antwort:"100 m",
    tipp:"Typischer LAN-Merksatz: TP = 100 m."
    },

    {
    frage:"Welcher Steckertyp wird bei Twisted-Pair-Verkabelung verwendet?",
    optionen:["BNC","RJ-45","RJ-11","SC"],
    antwort:"RJ-45",
    tipp:"Nicht mit RJ-11 Telefonstecker verwechseln."
    },

    {
    frage:"Was ist ein Cross-Connect-/Crossover-Kabel?",
    optionen:[
    "Kabel für die Direktverbindung zweier PCs",
    "Kabel zwischen Dose und Patchfeld",
    "Kabel zwischen Router und Internetprovider",
    "Glasfaserkabel für Backbone"
    ],
    antwort:"Kabel für die Direktverbindung zweier PCs",
    tipp:"Sende- und Empfangspaare sind gekreuzt."
    },

    {
    frage:"Warum sind bei Glasfaser meistens zwei Fasern notwendig?",
    optionen:[
    "Weil die Übertragung unidirektional erfolgt",
    "Weil die Übertragung nur über Kupfer funktioniert",
    "Weil Glasfaser immer Halbduplex ist",
    "Weil zwei Fasern die IP-Adresse speichern"
    ],
    antwort:"Weil die Übertragung unidirektional erfolgt",
    tipp:"Eine Faser hin, eine Faser zurück."
    },

    {
    frage:"Für welchen Bereich wird Glasfaser im LAN besonders eingesetzt?",
    optionen:["Backbone-Verkabelung","Mausanschluss","Druckerkabel","Tastaturanschluss"],
    antwort:"Backbone-Verkabelung",
    tipp:"Glasfaser ist stark bei langen Strecken und hoher Bandbreite."
    },

    {
    frage:"Mit welchem Glasfasertyp erreicht man die größten Entfernungen und höchsten Datenraten?",
    optionen:[
    "Multimode Stufenindex",
    "Multimode Gradientenindex",
    "Monomode Stufenindex",
    "Koaxial"
    ],
    antwort:"Monomode Stufenindex",
    tipp:"Mono = ein Lichtweg, gut für große Entfernungen."
    },

    {
    frage:"Welcher Steckertyp eignet sich nicht für Verkabelungen ab Kategorie 7?",
    optionen:["RJ-45","GG45","ARJ-45","TERA"],
    antwort:"RJ-45",
    tipp:"CAT 7 braucht bessere Stecksysteme."
    },

    {
    frage:"Welcher Steckertyp ist nicht abwärtskompatibel zu RJ-45?",
    optionen:["GG45","ARJ-45","TERA"],
    antwort:"TERA",
    tipp:"TERA ist ein eigenes Stecksystem."
    },

    {
    frage:"Wie viele Kontakte hat ein GG45-Stecker?",
    optionen:["4","8","12","16"],
    antwort:"12",
    tipp:"GG45 hat mehr Kontakte als RJ-45."
    },

    /* ===== STRUKTURIERTE VERKABELUNG ===== */

    {
    frage:"Welche Bereiche unterscheidet die strukturierte Verkabelung?",
    optionen:[
    "Primär-, Sekundär- und Tertiärverkabelung",
    "Koax, TP und Funk",
    "Öffentlich, privat und geschützt",
    "Router, Switch und Hub"
    ],
    antwort:"Primär-, Sekundär- und Tertiärverkabelung",
    tipp:"Drei Verkabelungsbereiche."
    },

    {
    frage:"Was ist der Primärbereich?",
    optionen:[
    "Verkabelung der Gebäude eines Standortes untereinander",
    "Verkabelung innerhalb einer Etage",
    "Verkabelung vom PC zum Drucker",
    "Verkabelung nur im Serverschrank"
    ],
    antwort:"Verkabelung der Gebäude eines Standortes untereinander",
    tipp:"Campus-/Standortverkabelung."
    },

    {
    frage:"Was ist der Sekundärbereich?",
    optionen:[
    "Verkabelung der Stockwerke eines Gebäudes untereinander",
    "Verkabelung zwischen zwei Städten",
    "Verkabelung innerhalb eines Arbeitsplatzes",
    "Verkabelung zwischen zwei PCs direkt"
    ],
    antwort:"Verkabelung der Stockwerke eines Gebäudes untereinander",
    tipp:"Vertikalverkabelung / Steigbereich."
    },

    {
    frage:"Was ist der Tertiärbereich?",
    optionen:[
    "Verkabelung innerhalb einer Etage",
    "Verkabelung zwischen Gebäuden",
    "Verkabelung zwischen Städten",
    "Verkabelung zwischen Internetprovidern"
    ],
    antwort:"Verkabelung innerhalb einer Etage",
    tipp:"Horizontalverkabelung."
    },

    {
    frage:"Maximale Entfernung zwischen Standortverteiler und Gebäudeverteiler?",
    optionen:["100 m","500 m","1500 m","3000 m"],
    antwort:"1500 m",
    tipp:"Primärbereich ist der längste Bereich."
    },

    {
    frage:"Maximale Entfernung zwischen Gebäudeverteiler und Etagenverteiler bei TP-Kabel?",
    optionen:["50 m","100 m","150 m","500 m"],
    antwort:"100 m",
    tipp:"TP bleibt bei 100 m."
    },

    {
    frage:"Maximale Entfernung zwischen Gebäudeverteiler und Etagenverteiler bei LWL?",
    optionen:["100 m","500 m","1500 m","3000 m"],
    antwort:"500 m",
    tipp:"LWL schafft hier mehr als TP."
    },

    {
    frage:"Maximale Entfernung zwischen Etagenverteiler und Endgerät bei TP?",
    optionen:["10 m","50 m","100 m","150 m"],
    antwort:"100 m",
    tipp:"Tertiärbereich mit TP = 100 m."
    },

    {
    frage:"Warum wird im Primärbereich häufig LWL eingesetzt?",
    optionen:[
    "Große Entfernungen, hohe Datenraten, elektromagnetische Unempfindlichkeit und galvanische Trennung",
    "Weil LWL billiger als jedes Kupferkabel ist",
    "Weil LWL keine Stecker braucht",
    "Weil LWL nur für kurze Strecken geeignet ist"
    ],
    antwort:"Große Entfernungen, hohe Datenraten, elektromagnetische Unempfindlichkeit und galvanische Trennung",
    tipp:"Gebäude untereinander: LWL ist sicherer gegen Störungen."
    },

    /* ===== NETZWERKGERÄTE ===== */

    {
    frage:"Auf welcher OSI-Schicht arbeiten Repeater?",
    optionen:["1","2","3","4"],
    antwort:"1",
    tipp:"Repeater arbeiten mit Signalen."
    },

    {
    frage:"Auf welcher OSI-Schicht arbeiten Hubs?",
    optionen:["1","2","3","4"],
    antwort:"1",
    tipp:"Hub = Multiport-Repeater."
    },

    {
    frage:"Auf welcher OSI-Schicht arbeiten Bridges?",
    optionen:["1","2","3","4"],
    antwort:"2",
    tipp:"Bridge wertet MAC-Adressen aus."
    },

    {
    frage:"Auf welcher OSI-Schicht arbeiten Switches?",
    optionen:["1","2","3","4"],
    antwort:"2",
    tipp:"Switch arbeitet mit MAC-Tabellen."
    },

    {
    frage:"Auf welcher OSI-Schicht arbeiten Router?",
    optionen:["1","2","3","4"],
    antwort:"3",
    tipp:"Router arbeitet mit IP-Adressen."
    },

    {
    frage:"Welche Aufgaben haben Repeater und Hubs?",
    optionen:[
    "Verstärken und Regenerieren von Signalen",
    "Routing zwischen Netzen",
    "IP-Adressen vergeben",
    "DNS-Namen auflösen"
    ],
    antwort:"Verstärken und Regenerieren von Signalen",
    tipp:"Layer 1."
    },

    {
    frage:"Bei einem Hub kann immer nur eine Station zur Zeit senden.",
    optionen:["Richtig","Falsch"],
    antwort:"Richtig",
    tipp:"Alle Ports teilen sich ein gemeinsames Medium."
    },

    {
    frage:"Mit einem Hub ist immer nur Halbduplex möglich.",
    optionen:["Richtig","Falsch"],
    antwort:"Richtig",
    tipp:"Hub kann nicht gleichzeitig getrennte Sendewege schalten."
    },

    {
    frage:"Eine Bridge regelt den Datenverkehr über welche Adressen?",
    optionen:["MAC-Adressen","IP-Adressen","Portnummern","DNS-Namen"],
    antwort:"MAC-Adressen",
    tipp:"Bridge = Schicht 2."
    },

    {
    frage:"Was versteht man unter Mikrosegmentierung?",
    optionen:[
    "Jeder Switchport bildet mit dem Endgerät eine eigene Kollisionsdomäne",
    "Jeder Routerport bildet eine eigene MAC-Adresse",
    "Jeder Hubport erzeugt eine eigene Broadcastdomäne",
    "Jeder Client bekommt eine eigene DNS-Zone"
    ],
    antwort:"Jeder Switchport bildet mit dem Endgerät eine eigene Kollisionsdomäne",
    tipp:"Switchport = eigene Kollisionsdomäne."
    },

    {
    frage:"Welche drei Switching-Verfahren heißen korrekt?",
    optionen:[
    "Fast-Forward, Fragment-Free, Store-and-Forward",
    "Fragment-Free, Fast-Injection, Flow-Control",
    "MAC-Control, Delay-Method, Store-and-Forward",
    "Streaming, Storing, Repeating"
    ],
    antwort:"Fast-Forward, Fragment-Free, Store-and-Forward",
    tipp:"Die drei klassischen Verfahren."
    },

    {
    frage:"Wie arbeitet Fast-Forward?",
    optionen:[
    "Es liest die ersten 6 Byte und leitet dann weiter",
    "Es liest den gesamten Frame",
    "Es liest die ersten 64 Byte",
    "Es wartet auf den Router"
    ],
    antwort:"Es liest die ersten 6 Byte und leitet dann weiter",
    tipp:"Ziel-MAC steht ganz vorne im Frame."
    },

    {
    frage:"Wie arbeitet Fragment-Free?",
    optionen:[
    "Es liest die ersten 64 Byte und leitet dann weiter",
    "Es liest nur 6 Byte",
    "Es liest den gesamten Frame",
    "Es liest nur den IP-Header"
    ],
    antwort:"Es liest die ersten 64 Byte und leitet dann weiter",
    tipp:"Kollisionen zeigen sich oft am Anfang."
    },

    {
    frage:"Wie arbeitet Store-and-Forward?",
    optionen:[
    "Es liest den gesamten Frame und prüft ihn",
    "Es liest nur die Zieladresse",
    "Es liest nur die ersten 64 Byte",
    "Es leitet alles blind weiter"
    ],
    antwort:"Es liest den gesamten Frame und prüft ihn",
    tipp:"Beste Fehlerprüfung, aber höhere Latenz."
    },

    {
    frage:"Welche Hauptaufgaben haben Router im WAN?",
    optionen:[
    "Wegefindung und Paketweiterleitung",
    "Frameversendung und Signalverstärkung",
    "MAC-Lernen und Hub-Funktion",
    "DNS-Auflösung und Druckerverwaltung"
    ],
    antwort:"Wegefindung und Paketweiterleitung",
    tipp:"Router vermitteln Pakete zwischen Netzen."
    },

    {
    frage:"Leiten Router Schicht-2-Broadcasts weiter?",
    optionen:["Richtig","Falsch"],
    antwort:"Falsch",
    tipp:"Router begrenzen Broadcastdomänen."
    },

    {
    frage:"Wodurch werden Broadcastdomänen begrenzt?",
    optionen:["Router und VLANs","Nur Hubs","Nur Repeater","Nur Kabel"],
    antwort:"Router und VLANs",
    tipp:"Broadcasts gehen nicht einfach durch Router."
    },

    {
    frage:"Ein Layer-3-Switch ermöglicht Routing zwischen Subnetzen und VLANs.",
    optionen:["Richtig","Falsch"],
    antwort:"Richtig",
    tipp:"Layer-3-Switch = Switch + Routing-Funktionen."
    },

    /* ===== ZUGRIFFSVERFAHREN ===== */

    {
    frage:"Was ist ein Zugriffsverfahren?",
    optionen:[
    "Ein Regelwerk, wie Netzknoten das Übertragungsmedium gemeinsam nutzen",
    "Ein Verfahren zur Passwortvergabe",
    "Ein Protokoll zur DNS-Auflösung",
    "Ein Verfahren zur IP-Adressierung"
    ],
    antwort:"Ein Regelwerk, wie Netzknoten das Übertragungsmedium gemeinsam nutzen",
    tipp:"Es regelt den Zugriff auf ein gemeinsames Medium."
    },

    {
    frage:"Wie heißt das Grundprinzip von CSMA/CD?",
    optionen:[
    "Wer zuerst kommt, mahlt zuerst",
    "Nur wer den Token hat darf senden",
    "Jeder zu seiner Zeit",
    "Der Server entscheidet"
    ],
    antwort:"Wer zuerst kommt, mahlt zuerst",
    tipp:"CSMA/CD = Zugriff bei freiem Medium."
    },

    {
    frage:"Wofür steht CS bei CSMA/CD?",
    optionen:["Carrier Sense","Cisco Systems","Computer Source","Carrier Source"],
    antwort:"Carrier Sense",
    tipp:"Das Medium wird abgehört."
    },

    {
    frage:"Wofür steht MA bei CSMA/CD?",
    optionen:["Multiple Access","Mount Access","Multiple Accident","Media Answer"],
    antwort:"Multiple Access",
    tipp:"Viele Stationen greifen auf ein Medium zu."
    },

    {
    frage:"Wofür steht CD bei CSMA/CD?",
    optionen:["Collision Detection","Carrier Detection","Computer Detection","Collision Destroying"],
    antwort:"Collision Detection",
    tipp:"Kollisionserkennung."
    },

    {
    frage:"Was macht eine Station bei CSMA/CD zuerst, wenn sie senden will?",
    optionen:["Kanal abhören","JAM-Signal senden","Daten sofort senden","Token anfordern"],
    antwort:"Kanal abhören",
    tipp:"Listen before talking."
    },

    {
    frage:"Was sendet eine Station aus, wenn sie bei CSMA/CD eine Kollision erkennt?",
    optionen:["JAM-Signal","YAM-Signal","Token","DNS-Paket"],
    antwort:"JAM-Signal",
    tipp:"Damit alle Stationen die Kollision mitbekommen."
    },

    {
    frage:"Was passiert bei CSMA/CD, wenn eine Station ein JAM-Signal empfängt?",
    optionen:[
    "Sie hört sofort auf zu senden",
    "Sie sendet schneller",
    "Sie bekommt einen Token",
    "Sie startet DNS"
    ],
    antwort:"Sie hört sofort auf zu senden",
    tipp:"Kollision erkannt → abbrechen."
    },

    {
    frage:"Welches Verfahren ist deterministisch?",
    optionen:["Token Passing","CSMA/CD","ALOHA","DNS"],
    antwort:"Token Passing",
    tipp:"Jede Station kommt berechenbar dran."
    },

    {
    frage:"Wann wird Token Passing eingesetzt?",
    optionen:["Bei logischer Ringtopologie","Bei logischer Bustopologie","Nur bei WLAN","Nur bei DNS"],
    antwort:"Bei logischer Ringtopologie",
    tipp:"Token läuft im Ring."
    },

    {
    frage:"Wer schickt nach Abschluss eines kompletten Sendevorgangs im Token-Ring einen neuen Frei-Token?",
    optionen:["Die Quellstation","Die Zielstation","Der Server","Der Router"],
    antwort:"Die Quellstation",
    tipp:"Die sendende Station beendet den Vorgang."
    },

    {
    frage:"Was bedeutet NAUN?",
    optionen:[
    "nearest active upstream neighbour",
    "nearest active upload neighbour",
    "network access user node",
    "new active upstream network"
    ],
    antwort:"nearest active upstream neighbour",
    tipp:"Token-Ring-Begriff."
    },

    {
    frage:"Welche Norm gehört zu CSMA/CD?",
    optionen:["IEEE 802.3","IEEE 802.5","IEEE 802.11","IEEE 802.1Q"],
    antwort:"IEEE 802.3",
    tipp:"Ethernet."
    },

    {
    frage:"Welche Norm gehört zu Token Ring?",
    optionen:["IEEE 802.5","IEEE 802.3","IEEE 802.11","IEEE 802.1D"],
    antwort:"IEEE 802.5",
    tipp:"Token Ring."
    },

    /* ===== ETHERNET / LOKALE NETZE ===== */

    {
    frage:"Welches Zugriffsverfahren wird bei Ethernet verwendet?",
    optionen:["CSMA/CD","Token Passing","CSMA/CA","EtherTalk"],
    antwort:"CSMA/CD",
    tipp:"Ethernet klassisch = CSMA/CD."
    },

    {
    frage:"Wie groß ist die maximale Segment-Ausdehnung bei 10Base5?",
    optionen:["100 m","185 m","500 m","2500 m"],
    antwort:"500 m",
    tipp:"10Base5 = Thicknet."
    },

    {
    frage:"Welche Ethernet-Variante heißt Thicknet oder Yellow Cable?",
    optionen:["10Base2","10Base5","10BaseT","100BaseTX"],
    antwort:"10Base5",
    tipp:"Dicker gelber Koax."
    },

    {
    frage:"Welche Ethernet-Variante heißt Thinnet oder Cheapernet?",
    optionen:["10Base2","10Base5","10BaseT","10BaseF"],
    antwort:"10Base2",
    tipp:"Dünnes Koax."
    },

    {
    frage:"Wie groß ist die maximale Segment-Ausdehnung bei 10Base2?",
    optionen:["185 m","500 m","925 m","100 m"],
    antwort:"185 m",
    tipp:"10Base2 = Thinnet."
    },

    {
    frage:"Welches Übertragungsmedium nutzen 10Base2 und 10Base5?",
    optionen:["Koaxialkabel","Twisted-Pair","Glasfaser","Funk"],
    antwort:"Koaxialkabel",
    tipp:"Alte Bus-Ethernet-Technik."
    },

    {
    frage:"10BaseT ist...",
    optionen:[
    "physikalisch ein Stern, logisch ein Bus",
    "physikalisch und logisch ein Ring",
    "physikalisch und logisch ein Bus",
    "physikalisch ein Bus, logisch ein Stern"
    ],
    antwort:"physikalisch ein Stern, logisch ein Bus",
    tipp:"Mit Hub logisch Bus."
    },

    {
    frage:"Token Ring ist...",
    optionen:[
    "physikalisch ein Stern, logisch ein Ring",
    "physikalisch und logisch ein Bus",
    "physikalisch ein Bus, logisch ein Stern",
    "physikalisch und logisch ein Stern"
    ],
    antwort:"physikalisch ein Stern, logisch ein Ring",
    tipp:"MSAU/Ringleitungsverteiler."
    },

    {
    frage:"Welche beiden Geschwindigkeiten bietet klassischer Token Ring?",
    optionen:["4 und 16 Mbps","10 und 100 Mbps","16 und 100 Mbps","4 und 10 Mbps"],
    antwort:"4 und 16 Mbps",
    tipp:"IBM Token Ring."
    },

    {
    frage:"Wie viele Leitungspaare braucht 100Base-TX?",
    optionen:["1","2","3","4"],
    antwort:"2",
    tipp:"100Base-TX nutzt zwei Paare."
    },

    {
    frage:"Wie viele Leitungspaare braucht 1000Base-T?",
    optionen:["1","2","3","4"],
    antwort:"4",
    tipp:"Gigabit über Kupfer nutzt vier Paare."
    },

    {
    frage:"Welches Übertragungsmedium nutzt 100Base-FX?",
    optionen:["Glasfaserkabel","Koaxialkabel","Twisted-Pair","Funk"],
    antwort:"Glasfaserkabel",
    tipp:"F = Fiber."
    },

    {
    frage:"Welches ist der am meisten verbreitete Fast-Ethernet-Typ?",
    optionen:["100Base-TX","100Base-T4","100Base-FX","100VG AnyLAN"],
    antwort:"100Base-TX",
    tipp:"Fast Ethernet über TP."
    },

    {
    frage:"Für welchen Einsatzbereich ist 10GBase-X gedacht?",
    optionen:["Backbone-Bereich","Mausanschluss","Druckerkabel","Telefonleitung"],
    antwort:"Backbone-Bereich",
    tipp:"10 GBit/s wird eher im Backbone eingesetzt."
    },

    /* ===== OSI ===== */

    {
    frage:"Die Schicht 4 des OSI-Modells heißt:",
    optionen:["Physical Layer","Network Layer","Session Layer","Transport Layer"],
    antwort:"Transport Layer",
    tipp:"Layer 4 = TCP/UDP."
    },

    {
    frage:"Die Schicht 6 des OSI-Modells heißt:",
    optionen:["Session Layer","Presentation Layer","Application Layer","Data Link Layer"],
    antwort:"Presentation Layer",
    tipp:"Darstellung, Format, Verschlüsselung."
    },

    {
    frage:"Die Schicht 5 des OSI-Modells heißt:",
    optionen:["Transport Layer","Network Layer","Session Layer","Presentation Layer"],
    antwort:"Session Layer",
    tipp:"Sitzung."
    },

    {
    frage:"Welches ist die richtige Reihenfolge der Datenkapselung?",
    optionen:[
    "Daten, Segmente, Pakete, Frames, Bits",
    "Daten, Pakete, Segmente, Frames, Bits",
    "Daten, Frames, Segmente, Pakete, Bits",
    "Bits, Frames, Pakete, Segmente, Daten"
    ],
    antwort:"Daten, Segmente, Pakete, Frames, Bits",
    tipp:"Von oben nach unten: Transport → Network → Data Link → Physical."
    },

    {
    frage:"In welche zwei Unterschichten wird Schicht 2 aufgeteilt?",
    optionen:["MAC und LLC","IP und TCP","MAC und TCP","Schicht 2 hat keine Unterschichten"],
    antwort:"MAC und LLC",
    tipp:"Data Link Layer = MAC + LLC."
    },

    {
    frage:"Service-Adressen wie Port oder Socket gehören zu welcher Schicht?",
    optionen:["2","3","4","5"],
    antwort:"4",
    tipp:"Ports = Transport Layer."
    },

    {
    frage:"Pakete sind die Datagramme welcher Schicht?",
    optionen:["1","2","3","4"],
    antwort:"3",
    tipp:"IP-Paket."
    },

    {
    frage:"Frames sind die Datagramme welcher Schicht?",
    optionen:["1","2","3","4"],
    antwort:"2",
    tipp:"Ethernet-Frame."
    },

    {
    frage:"Segmente sind die Datagramme welcher Schicht?",
    optionen:["1","2","3","4"],
    antwort:"4",
    tipp:"TCP-Segment."
    },

    {
    frage:"Die Übersetzung von Datenformaten und Ver-/Entschlüsselung sind Funktionen welcher Schicht?",
    optionen:["4","5","6","7"],
    antwort:"6",
    tipp:"Presentation Layer."
    },

    {
    frage:"Die Bereitstellung von Netzwerkdiensten ist eine Funktion welcher Schicht?",
    optionen:["4","5","6","7"],
    antwort:"7",
    tipp:"Application Layer."
    },

    /* ===== TCP/IP-ADRESSIERUNG ===== */

    {
    frage:"Welcher OSI-Schicht sind MAC-Adressen zugeordnet?",
    optionen:["1","2","3","4"],
    antwort:"2",
    tipp:"MAC = Data Link Layer."
    },

    {
    frage:"Welcher OSI-Schicht sind IP-Adressen zugeordnet?",
    optionen:["1","2","3","4"],
    antwort:"3",
    tipp:"IP = Network Layer."
    },

    {
    frage:"Welcher OSI-Schicht sind Portnummern zugeordnet?",
    optionen:["1","2","3","4"],
    antwort:"4",
    tipp:"Port = Transport Layer."
    },

    {
    frage:"Wie lang ist eine IPv6-Adresse?",
    optionen:["32 Bit","48 Bit","64 Bit","128 Bit"],
    antwort:"128 Bit",
    tipp:"IPv6 ist deutlich länger als IPv4."
    },

    {
    frage:"Wie lang ist eine Portnummer?",
    optionen:["8 Bit","16 Bit","32 Bit","48 Bit"],
    antwort:"16 Bit",
    tipp:"Ports gehen bis 65535."
    },

    {
    frage:"Welchen Gültigkeitsbereich hat die MAC-Adressierung?",
    optionen:["von Interface zu Interface","von Ende zu Ende","vom Client zum Server","vom Client zum DNS-Server"],
    antwort:"von Interface zu Interface",
    tipp:"MAC gilt nur auf dem nächsten Abschnitt."
    },

    {
    frage:"Welchen Gültigkeitsbereich hat die IP-Adressierung?",
    optionen:["von Interface zu Interface","von Ende zu Ende","nur im Switch","nur im Hub"],
    antwort:"von Ende zu Ende",
    tipp:"IP bleibt zwischen Absender und Empfänger erhalten."
    },

    {
    frage:"Wofür sind Portnummern notwendig?",
    optionen:[
    "Um Datenpakete einem Anwendungsprozess zuzuordnen",
    "Um MAC-Adressen zu vergeben",
    "Um Kabel zu nummerieren",
    "Um Frames zu verstärken"
    ],
    antwort:"Um Datenpakete einem Anwendungsprozess zuzuordnen",
    tipp:"Welcher Dienst/Prozess bekommt die Daten?"
    },

    {
    frage:"Welchen Bereich umfassen Well Known Ports?",
    optionen:["0-1023","1024-49151","49152-65535","1-65535"],
    antwort:"0-1023",
    tipp:"Bekannte Serverdienste."
    },

    {
    frage:"Welchen Bereich umfassen Registered Ports?",
    optionen:["0-1023","1024-49151","49152-65535","1-1024"],
    antwort:"1024-49151",
    tipp:"Registrierte Dienste."
    },

    {
    frage:"Welchen Bereich umfassen Dynamic Ports?",
    optionen:["0-1023","1024-49151","49152-65535","1-1024"],
    antwort:"49152-65535",
    tipp:"Dynamisch/private Ports."
    },

    {
    frage:"Welche Portnummer ist für IMAP festgelegt?",
    optionen:["53","80","110","143"],
    antwort:"143",
    tipp:"IMAP = Mail abrufen/synchronisieren."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let mode = "start";

function normalize(text){
    return String(text)
        .toLowerCase()
        .replace(/ä/g,"ae")
        .replace(/ö/g,"oe")
        .replace(/ü/g,"ue")
        .replace(/ß/g,"ss")
        .replace(/[.,!?;:()\-_/]/g," ")
        .replace(/\s+/g," ")
        .trim();
}

function words(text){
    return normalize(text).split(" ").filter(Boolean);
}

function levenshtein(a,b){
    a = normalize(a);
    b = normalize(b);
    const matrix = [];
    for(let i = 0; i <= b.length; i++) matrix[i] = [i];
    for(let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for(let i = 1; i <= b.length; i++){
        for(let j = 1; j <= a.length; j++){
            if(b.charAt(i - 1) === a.charAt(j - 1)){
                matrix[i][j] = matrix[i - 1][j - 1];
            }else{
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function similarEnough(userAnswer, correctAnswer){
    const user = normalize(userAnswer);
    const correct = normalize(correctAnswer);
    if(user === correct) return true;
    if(user.length < 3 || correct.length < 3) return false;

    // Zahlenfragen streng behandeln
    if(/^\d+$/.test(correct)) return user === correct;

    const distance = levenshtein(user, correct);
    const maxLength = Math.max(user.length, correct.length);
    return distance <= Math.max(2, Math.floor(maxLength * 0.18));
}

function keywordMatch(userAnswer, keywordGroups){
    if(!keywordGroups) return false;
    const userNorm = normalize(userAnswer);
    const userWords = words(userAnswer);

    return keywordGroups.some(group => group.every(keyword => {
        const key = normalize(keyword);
        if(key.includes(" ")){
            if(userNorm.includes(key)) return true;
            const keyWords = key.split(" ").filter(Boolean);
            return keyWords.every(kw => userWords.some(word => word === kw || levenshtein(word, kw) <= 1));
        }
        return userWords.some(word => word === key || levenshtein(word, key) <= 1);
    }));
}

function isTextAnswerCorrect(userAnswer, question){
    const correctAnswers = Array.isArray(question.antwort) ? question.antwort : [question.antwort];
    if(correctAnswers.some(answer => similarEnough(userAnswer, answer))) return true;
    return keywordMatch(userAnswer, question.keywords);
}

function setupUI(){
    const darkBtn = document.getElementById("darkModeBtn");
    if(localStorage.getItem("darkmode") === "on"){
        document.body.classList.add("dark");
        if(darkBtn) darkBtn.textContent = "☀️ Light Mode";
    }
    if(darkBtn) darkBtn.onclick = toggleDarkMode;
    showStart();
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");
    const active = document.body.classList.contains("dark");
    localStorage.setItem("darkmode", active ? "on" : "off");
    const darkBtn = document.getElementById("darkModeBtn");
    if(darkBtn) darkBtn.textContent = active ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function updateProgress(){
    const progress = document.getElementById("progress");
    if(!progress) return;
    let percent = 0;
    if(mode === "quiz") percent = Math.round((currentQuestion / questions.length) * 100);
    if(mode === "finish") percent = 100;
    progress.style.width = percent + "%";
    progress.textContent = percent + "%";
}

function showStart(){
    mode = "start";
    updateProgress();
    document.getElementById("quiz").innerHTML = `
        <div class="startScreen">
            <h2>Willkommen 👋</h2>
            <p>Wähle zuerst den Lernmodus zum Wiederholen oder starte direkt das Quiz.</p>
            <div class="buttonRow">
                <button onclick="showLearningMode()">📘 Lernmodus öffnen</button>
                <button onclick="startQuiz()">▶️ Quiz starten</button>
            </div>
        </div>
    `;
}

function showLearningMode(){
    mode = "learn";
    updateProgress();
    const cards = learningModules.map(m => `
        <div class="learnCard">
            <h3>${m.title}</h3>
            <p>${m.body}</p>
            <div class="merksatz">💡 ${m.merksatz}</div>
        </div>
    `).join("");

    document.getElementById("quiz").innerHTML = `
        <h2>📘 Lernmodus</h2>
        <p class="subText">Lies dir diese Zusammenfassung durch. Danach beantworten sich viele Quizfragen deutlich leichter.</p>
        ${cards}
        <div class="buttonRow">
            <button onclick="startQuiz()">▶️ Quiz starten</button>
            <button onclick="showStart()">Zurück</button>
        </div>
    `;
}

function startQuiz(){
    mode = "quiz";
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
}

function showQuestion(){
    mode = "quiz";
    updateProgress();
    const q = questions[currentQuestion];
    let html = `
        <div class="question-meta">Frage ${currentQuestion + 1}/${questions.length}</div>
        <h2>${q.frage}</h2>
    `;

    if(q.optionen){
        if(q.multi){
            html += `<p class="multiHint">Hier kannst du mehr als 1 Antwort ankreuzen.</p>`;
            q.optionen.forEach(opt => {
                html += `<label class="answerOption"><input type="checkbox" name="ans" value="${opt}"> <span>${opt}</span></label>`;
            });
        }else{
            q.optionen.forEach(opt => {
                html += `<label class="answerOption"><input type="radio" name="ans" value="${opt}"> <span>${opt}</span></label>`;
            });
        }
    }else{
        html += `<input id="textAnswer" placeholder="Antwort eingeben">`;
    }

    html += `
        <div id="tipBox" class="tipBox" style="display:none;"></div>
        <div class="buttonRow">
            <button class="tipBtn" onclick="showTip()">💡 Tipp</button>
            <button onclick="checkAnswer()">Weiter</button>
        </div>
    `;
    document.getElementById("quiz").innerHTML = html;
}

function showTip(){
    const q = questions[currentQuestion];
    const box = document.getElementById("tipBox");
    if(box){
        box.style.display = "block";
        box.innerHTML = "💡 " + (q.tipp || "Denk an das Thema der Frage.");
    }
}

function checkAnswer(){
    const q = questions[currentQuestion];
    let user;
    let correct = false;

    if(q.optionen){
        if(q.multi){
            const checked = [...document.querySelectorAll('input[name="ans"]:checked')];
            if(checked.length === 0){
                alert("Bitte mindestens eine Antwort auswählen.");
                return;
            }
            user = checked.map(x => x.value);
            const correctAnswers = [...q.antwort].map(normalize).sort();
            const userAnswersSorted = [...user].map(normalize).sort();
            correct = JSON.stringify(correctAnswers) === JSON.stringify(userAnswersSorted);
        }else{
            const selected = document.querySelector('input[name="ans"]:checked');
            if(!selected){
                alert("Bitte eine Antwort auswählen.");
                return;
            }
            user = selected.value;
            correct = normalize(user) === normalize(q.antwort);
        }
    }else{
        user = document.getElementById("textAnswer").value;
        if(!normalize(user)){
            alert("Bitte eine Antwort eingeben.");
            return;
        }
        correct = isTextAnswerCorrect(user, q);
    }

    if(correct) score++;
    userAnswers.push({
        frage:q.frage,
        user:Array.isArray(user) ? user.join(", ") : user,
        korrekt:Array.isArray(q.antwort) ? q.antwort.join(", ") : q.antwort,
        tipp:q.tipp || "",
        erklaerung:q.erklaerung || "",
        richtig:correct
    });

    currentQuestion++;
    if(currentQuestion < questions.length) showQuestion();
    else finish();
}

function finish(){
    mode = "finish";
    updateProgress();
    const percent = Math.round((score / questions.length) * 100);
    document.getElementById("quiz").innerHTML = `
        <div class="result">
            <h1>Fertig 🎉</h1>
            <h2>${score}/${questions.length} richtig</h2>
            <h2>${percent}%</h2>
            <p>Jetzt kannst du deine Auswertung als DOCX herunterladen.</p>
            <div class="buttonRow centerButtons">
                <button onclick="solutions()">Lösungen anzeigen</button>
                <button onclick="downloadDOCX()">📄 Ergebnisse als DOCX herunterladen</button>
                <button onclick="restartQuiz()">Neu starten</button>
                <button onclick="showLearningMode()">📘 Lernmodus</button>
            </div>
        </div>
    `;
}

async function downloadDOCX(){
    try{
        const percent = Math.round((score / questions.length) * 100);
        const response = await fetch("/download-results", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score, total: questions.length, percent, answers: userAnswers })
        });
        if(!response.ok) throw new Error(await response.text());
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Netzwerktechnik_Quiz_Ergebnis.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    }catch(error){
        console.error(error);
        alert("DOCX konnte nicht erstellt werden. Starte bitte mit node server.js und prüfe, ob npm install ausgeführt wurde.");
    }
}

function solutions(){
    let html = `<h1>Lösungen</h1>`;
    userAnswers.forEach((a,i) => {
        html += `
            <div class="solutionCard ${a.richtig ? "correct" : "wrong"}">
                <b>Frage ${i + 1}</b><br>
                ${a.frage}<br><br>
                Deine Antwort: ${a.user} ${a.richtig ? "✅" : "❌"}<br>
                Richtige Antwort: ${a.korrekt}<br>
                ${a.erklaerung ? `<i>${a.erklaerung}</i><br>` : ""}
                <small>Tipp: ${a.tipp}</small>
            </div>
        `;
    });
    html += `<div class="buttonRow"><button onclick="finish()">Zurück zum Ergebnis</button><button onclick="restartQuiz()">Neu starten</button></div>`;
    document.getElementById("quiz").innerHTML = html;
}

function restartQuiz(){
    startQuiz();
}

setupUI();
