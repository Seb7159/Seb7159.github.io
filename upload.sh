cd /home/pi/GitHub/Seba7159.github.io 

# echo "Waiting 1 minute..."
# sleep 1m 

if [ "$(cat ip.txt)" != "$(curl icanhazip.com)" ] 
then
	echo "IP has been changed. "
	echo "Old IP was $(cat ip.txt). "
	echo " New IP is $(curl icanhazip.com)" 

	#Send new IP on github project  
	sleep 1m
	git fetch
	curl icanhazip.com > ip.txt
	git add ip.txt 
	git commit -m "Cron job updated Raspberry's IP" --allow-empty
	git push
fi

