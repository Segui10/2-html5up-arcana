<script type="text/javascript" src="modules/series/view/js/users.js" ></script>
<p>Introduce el nuevo elemento:</p>
		 <form name="formulario" id="form_user" method="POST" action="index.php?module=series">
		  <table width="50%"  border="0" cellspacing="0" cellpadding="0">
			<tr>
			  <td width="20%">Titulo</td>
			  <td width="40%"><input name="titulo" placeholder="Titulo" type="text" id="titulo" value="<?php
					if (!isset($error['titulo'])) {
							echo $_POST ? $_POST['titulo'] : "";
					}
					?>"></td>
				<td width="40%"><div id="e_titulo"><?php
						if (isset($error['titulo'])) {
								print ("<BR><span style='color: #ff0000'>" . "* " . $error['titulo'] . "</span><br/>");
						}
						?></div></td>
			</tr>
			<tr>
			  <td>Titulo Alternativo</td>
			  <td><input name="tituloa" placeholder="Titulo Alternativo" type="text" id="tituloa" value="<?php
					if (!isset($error['tituloa'])) {
							echo $_POST ? $_POST['titulo'] : "";
					}
					?>"></td>
				<td width="40%"><div id="e_tituloa"><?php
						if (isset($error['tituloa'])) {
								print ("<BR><span style='color: #ff0000'>" . "* " . $error['tituloa'] . "</span><br/>");
						}
						?></div></td>
			</tr>
			<tr>
			  <td>Director</td>
			  <td><input name="director" placeholder="Director" type="text" id="director" value="<?php
					if (!isset($error['director'])) {
							echo $_POST ? $_POST['director'] : "";
					}
					?>"></td>
				<td width="40%"><div id="e_director"><?php
						if (isset($error['director'])) {
								print ("<BR><span style='color: #ff0000'>" . "* " . $error['director'] . "</span><br/>");
						}
						?></div></td>
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
			  <td>Accion<input name="genero" type="radio" value="accion" checked>
				Aventura<input name="genero" type="radio" value="aventura">
					Misterio<input name="genero" type="radio" value="misterio">
					Romance<input name="genero" type="radio" value="romance"></td>
					<td></td>
			</tr>
			<tr>
			  <td>Subgeneros</td>
			  <td>Accion<input type="checkbox" name="gustos[]" value="Accion">
					Aventura  <input type="checkbox" name="gustos[]" value="Aventura">
					Misterio <input type="checkbox" name="gustos[]" value="Misterio">
					Romance   <input type="checkbox" name="gustos[]" value="Romance"></td>
					<td></td>
			</tr>
			<tr>
			  <td>Fecha de Estreno</td>
			  <td><input id="date_reception" type="text" name="date_reception"><div id="result"></div></td>
				<td width="40%"><div id="e_date_reception"><?php
						if (isset($error['director'])) {
								print ("<BR><span style='color: #ff0000'>" . "* " . $error['date_reception'] . "</span><br/>");
						}
						?></div>
			</tr>
			<tr>
			  <td><input type="submit" id="SubmitSeries" name="SubmitSeries" value="Enviar"></td>
			  <td>&nbsp;</td>
				<td></td>
			</tr>
		  </table>
		</form>
