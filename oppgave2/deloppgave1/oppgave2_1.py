#1
#Array
# = er nok i python mens i javascript må man bruke const/let
prw = [
    "kompilator",
    "variabel",
    "funksjon",
    "rekursjon",
    "syntaks",
    "bibliotek",
    "algoritme",
    "iterasjon",
    "datastruktur",
    "kommentar"
]

#2
#lager en funksjon kalt for lungo, den tar imot info fra parameteren ordliste
#if delen sjekker først om listen er tom, men fordi den bruker not blir resultatet true hvis listen er tom, hvis ikke returneren den funksjonen None
#Return max leter etter det lengste ordet i listen.
#key=len finner det lengste ordet i ordlisten.
def lungo(ordliste):
    if not ordliste:
        return None
    return max(ordliste, key=len)

#3
#lager en ny funksjon kalt for add og tar imot en variabel kalt for nytt:ord
#prw.append legger order inn i listen/array prw.
#strip fjerner mellomrom før og etter ordet.
def add(nytt_ord):
    prw.append(nytt_ord.strip())

# Funksjon som legger til ord til ordliste
#4
add("objektorientert")

#5
#resultat lagrer verdien fra lungo(prw)
#Print skriver ut Lengst: + verdien lagret i resultat
resultat = lungo(prw)
print("Lengst:", resultat)
