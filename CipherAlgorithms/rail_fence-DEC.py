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
	alp_ind = 0
	fl = 0
	rc = 0

	while index < len(msg):
	
		
		if rc == 0:
			rows[rc][index] = msg[alp_ind]
			index +=1
			rc +=1
			alp_ind +=1
			
		if fl == 0:
			
			rows[rc][index] = "*"
			rc +=1
			
			index += 1
			
		else:
			
			rows[rc][index] = "*"
			rc -= 1
			
			index +=1
			
			
		if rc == key:
			rc -= 2
			fl = 1
		if rc == 0:
			rc = 0
			fl = 0
	for row in rows:
		print row

	for i in range(1,len(rows)):
		for ind,item in enumerate(rows[i]):
			if rows[i][ind] == "*":
				rows[i][ind] = msg[alp_ind]
				alp_ind += 1
	print 
	for row in rows:
		print row


		

	



print encrypt("delseheloatftaafcledswteenth",5)