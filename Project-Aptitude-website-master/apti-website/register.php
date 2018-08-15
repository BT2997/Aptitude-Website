<? php


$email=$filter_input(INPUT_POST,'email');
$pass1=$filter_input(INPUT_POST,'psw');
$pass2=$filter_input(INPUT_POST,'psw-repeat');


if (!empty($email)) {

	if (!empty($pass1)) {

		if(!empty($pass2))
		{

       
					$con=mysql_connect("localhost","root","","trial1");
					if(!con)
						{	
							die("could not connect".mysql_error());
					    }

						  mysql_select_db("trial1",$con);


						   $query="insert into userdata(email,password1,password2)values('$email','$pass1','$pass2')";

					if(!mysql_query($query,$con))
						{
						 die('Error in insertin'.mysql_error());

						}else
						   {
							 echo " data inserted successfully";

							}

			
		}else
		{
			echo "  field confirm password is empty"
			die();
		}


	}else
	{

		echo " password field is empty"
		# code...
		die();
	}
	# code...


}else
{

	echo " email field is empty"
	die();
}



	?>