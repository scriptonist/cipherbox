import os
os.system("cls")

def encrypt(msg,key):
	msg = msg.lower()
	msg = list(msg)
	list_no=0
	key_list = [[] for i in range(key) ]
	for index,item in enumerate(msg):
		if list_no == 0 and list_no<len(key_list):
			key_list[list_no].append(item)
			key_list[list_no+1].append(".")
			key_list[list_no+2].append(".") 
			list_no += 1
		elif list_no == 1 and list_no<len(key_list):
			key_list[list_no-1].append(".")
			key_list[list_no].append(item)
			key_list[list_no+1].append(".")
			list_no += 1 
		elif list_no == 2 and list_no<len(key_list):
			key_list[list_no-2].append(".")
			key_list[list_no-1].append(".")
			key_list[list_no].append(item) 
			list_no = 0
	
	enc = []
	key_list_length = len(key_list)
	key_list_item_length = len(key_list[0])
	for item in key_list:
		print item
		print 
	for item in range(key_list_length):
		for ind in range(key_list_item_length) :
			if  key_list[item][ind]!= '.':
				enc.append(key_list[item][ind])
	

	enc = ''.join(enc)
	print enc



encrypt("defend the east wall of the castle",3)