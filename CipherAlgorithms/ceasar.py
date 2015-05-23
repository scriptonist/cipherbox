import os
os.system('cls')
print "*Ceasar Cipher Encrypter & Decrypter*"
print

def encrypt(msg,shift):
	msg = msg.lower()
	msg = list(msg)
	for ind,ele in enumerate(msg):
		sh = shift
		asc = ord(ele)
		if(asc + sh > 122):
			sh = (sh+asc)-122
			msg[ind] = chr(96+sh)
		else:
			msg[ind] = chr(asc+sh)
	msg = ''.join(msg)
	return msg
def decrypt(msg,shift):
	msg = msg.lower()
	msg = list(msg)
	for ind,ele in enumerate(msg):
		sh = shift
		asc = ord(ele)
		if (asc - sh) <97:
			sh = sh - (asc - 97)
			msg[ind] = chr(123-sh)
		else:
			msg[ind] = chr(asc - sh)
	msg="".join(msg)
	return msg 


def call_enc():
	msg = str(raw_input("Enter The String : "))
	shift = int(raw_input("Number Of Shifts  : "))
	ec = encrypt(msg,shift)
	ec = ec.upper()
	print "Encrypted Message : ",ec
	print "Decrypted :  ",decrypt(ec,shift)

while(1==1):
	call_enc()
	c = str(raw_input("Exit Y? "))
	if(c == "Y" or c == 'y'):
		break

decrypt("def",3)