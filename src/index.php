<?php $is_prod = isset($_GET['prod']) && $_GET['prod'] == 1; ?>

<title>Elematter</title>
<meta name=viewport content=width=device-width,initial-scale=1,user-scalable=0,minimal-ui>
<meta name=apple-mobile-web-app-capable content=yes>
<meta name=apple-mobile-web-app-status-bar-style content=black>

<?php if($is_prod){ ?>
	<style><?php include('temp/_.css'); ?></style>
<?php } else { ?>
	<link href=css/main.css rel=stylesheet>
<?php } ?>

<!--==============================================================================
Game Element
===============================================================================-->
<div class="g x1">
	<!--==============================================================================
	Play State
	===============================================================================-->
	<div class="s s-play">
		<!--==============================================================================
		UI Top Row
		===============================================================================-->
		<div class="row top-row">
			<a class="b b-play s3"><i>&rtrif;</i>Play</a>
			<a class="b b-x1 s1 selected">&times;1</a>
			<a class="b b-x2 s1">&times;2</a>
			<a class="b b-x3 s1">&times;3</a>
			<a class="b b-e s2 atk" title="Destroy all Earth enemies"><i>&otimes;</i>Earth</a>
			<a class="b b-w s2 atk" title="Destroy all Water enemies"><i>&otimes;</i>Water</a>
			<a class="b b-a s2 atk" title="Destroy all Air enemies"><i>&otimes;</i>Air</a>
			<a class="b b-f s2 atk" title="Destroy all Fire enemies"><i>&otimes;</i>Fire</a>
			<a class="b b-mute s3"><i>&sung;</i>Mute</a>
			<a class="b b-menu s3"><i>&equiv;</i>Menu</a>
		</div>
		<!--==============================================================================
		UI Bottom Row
		===============================================================================-->
		<div class="row bot-row">
			<div class="l s1"><i>&hearts;</i></div>
			<div class="d d-lives s2">13 / 13</div>
			<div class="l s1"><i>&there4;</i></div>
			<div class="d d-resources s2">1,000</div>
			<div class="l s2">Wave</div>
			<div class="d d-wave s2">1 / 20</div>
			<div class="l s2">Next</div>
			<div class="d d-next s4">
				<span class="w w-e">&times;10</span>
				<span class="w w-w">&times;10</span>
				<span class="w w-a">&times;10</span>
				<span class="w w-f">&times;10</span>
			</div>
			<a class="b b-send s4"><i>&raquo;</i>Send Next +$300</a>
		</div>
		<!--==============================================================================
		Tower Select/Build Menu
		===============================================================================-->
		<div class="tower-menu ctx-left">
			<a class="tower-select tower-default"></a>
			<a class="tower-select tower-earth"></a>
			<a class="tower-select tower-water"></a>
			<a class="tower-select tower-air"></a>
			<a class="tower-select tower-fire"></a>
			<div class="tower-info">
				<div class="tower-title">
					<span class="tower-type">Earth</span>
					<span class="tower-divider">|</span>
					<span class="tower-cost">&there4; 200</span>
				</div>
				<div class="tower-desc">Well Rounded Tower</div>
				<div class="tower-stat">
					<strong>Damage:</strong> <span class="tower-damage">Medium +50% vs Air</span>
				</div>
				<div class="tower-stat">
					<strong>Range:</strong> <span class="tower-range">Medium</span>
				</div>
				<div class="tower-stat">
					<strong>Rate:</strong> <span class="tower-rate">Medium</span>
				</div>
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