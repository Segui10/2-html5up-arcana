<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">

<p>Introduce el nuevo elemento:</p>
		 <form name="formulario" id="form_user" method="POST">
		  <table width="50%"  border="0" cellspacing="0" cellpadding="0">
			<tr>
			  <td width="20%">Titulo</td>
			  <td width="40%"><input name="titulo" placeholder="Titulo" type="text" id="titulo" value=""></td>
				<td width="40%"></td>
			</tr>
			<tr>
			  <td>Titulo Alternativo</td>
			  <td><input name="tituloa" placeholder="Titulo Alternativo" type="text" id="tituloa" value=""></td>
				<td width="40%"></td>
			</tr>
			<tr>
			  <td>Director</td>
			  <td><input name="director" placeholder="Director" type="text" id="director" value=""></td>
				<td width="40%"></td>
			</tr>
			<tr>
			  <td>Tipo </td>
			  <td><select name="tipo" id="tipo">
				<option value="pelicula">Pelicula</option>
				<option value="serie">Serie</option>
			  </select></td>
				<td></td>
			</tr>
			<tr>
			  <td>Genero Principal</td>
			  <td>Accion<input name="generop" id="generop" type="radio" value="accion" checked>
				Aventura<input name="generop" id="generop" type="radio" value="aventura">
					Misterio<input name="generop" id="generop" type="radio" value="misterio">
					Romance<input name="generop" id="generop" type="radio" value="romance"></td>
					<td></td>
			</tr>
			<tr>
			  <td>Subgeneros</td>
			  <td>Accion<input type="checkbox" id="generos" name="gustos[]" class="catCheckbox" value="Accion">
					Aventura  <input type="checkbox" id="generos" name="gustos[]" class="catCheckbox" value="Aventura">
					Misterio <input type="checkbox" id="generos" name="gustos[]" class="catCheckbox" value="Misterio">
					Romance   <input type="checkbox" id="generos" name="gustos[]" class="catCheckbox" value="Romance"></td>
					<td></td>
			</tr>
			<tr>
			  <td>Fecha de Estreno</td>
			  <td><input id="date_reception" type="text" name="date_reception"><div id="result"></div></td>
				<td width="40%">
			</tr>
			<tr><td>Ciudad donde se rodo:</td></tr>
			<tr>
					<td>Country: </td>
			<td id="error_country">
				<select name="country" id="country">
				<option selected>Select country</option>
			</select>
			<div ></div>
		</td>
			</tr>
			<tr>
				<td> </td>
			</tr>
			<tr>
					<td>Province: </td>
			<td id="error_province">
				<select name="province" id="province" disabled="true">
				<option selected></option>
			</select>
			<div></div>
		</td>
			</tr>
			<tr>
				<td> </td>
			</tr>
			<tr>
					<td>City: </td>
			<td id="error_city">
				<select name="city" id="city" disabled="true">
				<option selected></option>
			</select>
			<div></div>
		</td>
	</tr>
	<tr>
			<tr>
			<td>Imagen</td>
			<td><div id="dropzone" class="dropzone"></div></td>
			<td></td>
			</tr>
			<tr>
			  <td><input type="button" id="SubmitSeries" name="SubmitSeries" value="sumbit"></td>
			  <td>&nbsp;</td>
				<td></td>
			</tr>
		  </table>
		</form>
		<script type="text/javascript" src="modules/series/view/js/users.js" ></script>
