import os
os.system("clear")

def encrypt(msg,key):
	msg = msg.replace(' ','')
	msg = list(msg)
	rows = [[] for i in range(key)]
	#Initialise Each Row with .
	for row in rows:
		for i in range(len(msg)):
			row.append('.')
	index = 0 
	rc = 0
	fl = 0
	for alpha in msg:
		
		rows[rc][index] = alpha
		index += 1
		if(fl == 0):
			rc +=1
		else:
			rc -=1
		if rc == key:
			fl = 1
			rc -=2
		if rc == 0:
			fl = 0
	for row in rows :
		print row

	enc = []
	for row in rows:
		for item in row:
			if item != '.':
				enc.append(item)


	
	enc = ''.join(enc)
	return enc




		

	



print encrypt("defend the east wall of the castle",5)