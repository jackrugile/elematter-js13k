<?php $is_prod = isset($_GET['prod']) && $_GET['prod'] == 1; ?>

<title>js13k</title>
<meta name=viewport content=width=device-width,initial-scale=1,user-scalable=0,minimal-ui>
<meta name=apple-mobile-web-app-capable content=yes>
<meta name=apple-mobile-web-app-status-bar-style content=black>

<?php if($is_prod){ ?>
	<style><?php include('temp/_.css'); ?></style>
<?php } else { ?>
	<link href=css/main.css rel=stylesheet>
<?php } ?>

<div id="g" class="paused">
	<div id="s-play" class="s">
		<div class="row">
			<a id="b-play" class="s3">
				<i>&rtrif;</i>
				<span id="play">Play</span>
				<span id="pause">Pause</span>
			</a>
			<a id="b-x1" class="s1 selected">x1</a>
			<a id="b-x2" class="s1">x2</a>
			<a id="b-x3" class="s1">x3</a>
			<a id="b-e" class="s2">E</a>
			<a id="b-w" class="s2">W</a>
			<a id="b-a" class="s2">A</a>
			<a id="b-f" class="s2">F</a>
			<a id="b-mute" class="s3">
				<i>&sung;</i>
				<span id="mute">Mute</span>
				<span id="unmute">Unmute</span>
			</a>
			<a id="b-menu" class="s3">&equiv; Menu</a>
		</div>
		<div class="row">
			<div class="d-lives">
				<i>&hearts;</i>
				<span class="lives">20</span>
				Lives
			</div>
			<div class="d-elematter">
				<span class="elematter">100</span>
				Elematter
			</div>
		</div>
		
	</div>
</div>

<?php if($is_prod){ ?>
	<script><?php include('temp/_.js'); ?></script>
<?php } else { ?>
	<script src="js/vendor/jsfxr.js"></script>
	<script src="js/g/g.js"></script>
	<script src="js/g/group.js"></script>
	<script src="js/g/pool.js"></script>
	<script src="js/g/util.js"></script>
	<script src="js/g/states.js"></script>
	<script src="js/g/state.js"></script>
	<script src="js/g/time.js"></script>
	<script src="js/g/storage.js"></script>
	<script src="js/data/attacks.js"></script>
	<script src="js/data/map.js"></script>
	<script src="js/data/towers.js"></script>
	<script src="js/data/waves.js"></script>
	<script src="js/entities/tile.js"></script>
	<script src="js/entities/tower.js"></script>
	<script src="js/entities/bullet.js"></script>
	<script src="js/entities/button.js"></script>
	<script src="js/states/menu.js"></script>
	<script src="js/states/play.js"></script>
	<script src="js/states/gameover.js"></script>
	<script src="js/game.js"></script>
<?php } ?>