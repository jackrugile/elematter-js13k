<?php $is_prod = isset($_GET['prod']) && $_GET['prod'] == 1; ?>

<title>Elematter</title>

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
			<a class="b b-x1 s1">&times;1</a>
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
			<div class="d d-lives s2"> </div>
			<div class="l s1"><i>&there4;</i></div>
			<div class="d d-fragments s2"> </div>
			<div class="l s2">Wave</div>
			<div class="d d-wave s2"> </div>
			<div class="l s2">Next</div>
			<div class="d d-next s4">
				&times;<span class="w w-e">10</span>
				&times;<span class="w w-w">10</span>
				&times;<span class="w w-a">10</span>
				&times;<span class="w w-f">10</span>
			</div>
			<a class="b b-send s4"><i>&raquo;</i>Send Next +300 <i>&there4;</i></a>
		</div>
		<!--==============================================================================
		Tower Select/Build Menu
		===============================================================================-->
		<div class="build-menu-wrap">
			<div class="build-menu">
				<div class="build-selects">
					<a class="build-select build-d"></a>
					<a class="build-select build-e" data-type="e"></a>
					<a class="build-select build-w" data-type="w"></a>
					<a class="build-select build-a" data-type="a"></a>
					<a class="build-select build-f" data-type="f"></a>
				</div>
				<div class="build-info">
					<div class="build-title">
						<span class="build-cost"> </span> <i>&there4;</i>
						<span class="build-type"> </span>
					</div>
					<div class="build-desc"> </div>
					<div class="build-stat build-dmg-wrap">
						<strong>Damage:</strong> <span class="build-mtr"><span></span><span></span><span></span></span> <span class="build-dmg"> </span>
					</div>
					<div class="build-stat build-rng-wrap">
						<strong>Range:</strong> <span class="build-mtr"><span></span><span></span><span></span></span> <span class="build-rng"> </span>
					</div>
					<div class="build-stat build-rte-wrap">
						<strong>Rate:</strong> <span class="build-mtr"><span></span><span></span><span></span></span> <span class="build-rte"> </span>
					</div>
				</div>
			</div>
		</div>
		<!--==============================================================================
		Tower Upgrade/Reclaim Menu
		===============================================================================-->
		<div class="tower-menu-wrap">
			<div class="tower-menu">
				<div class="tower-buttons">
					<a class="tower-button highlight anim"></a>
					<a class="tower-button upgrade" data-action="upgrade">
						<div></div>
						<div></div>
						<div></div>
					</a>
					<a class="tower-button reclaim" data-action="reclaim">
						<div></div>
						<div></div>
						<div></div>
					</a>
				</div>
				<div class="tower-info">
					<div class="tower-title">
						<span class="tower-cost">100</span> <i>&there4;</i>
						<span class="tower-label">Upgrade</span>
					</div>
					<div class="tower-stat tower-dmg-wrap">
						<strong>Damage:</strong> <span class="tower-dmg">10</span> <i>&raquo;</i> <span class="tower-dmg-next">120</span>
					</div>
					<div class="tower-stat tower-rng-wrap">
						<strong>Range:</strong> <span class="tower-rng">100</span> <i>&raquo;</i> <span class="tower-rng-next">120</span>
					</div>
					<div class="tower-stat tower-rte-wrap">
						<strong>Rate:</strong> <span class="tower-rte">100</span> <i>&raquo;</i> <span class="tower-rte-next">120</span>
					</div>
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
	<script src="js/g/audio.js"></script>
	<script src="js/g/group.js"></script>
	<script src="js/g/pool.js"></script>
	<script src="js/g/util.js"></script>
	<script src="js/g/states.js"></script>
	<script src="js/g/state.js"></script>
	<script src="js/g/time.js"></script>
	<script src="js/g/storage.js"></script>
	<script src="js/data/attacks.js"></script>
	<script src="js/data/audio.js"></script>
	<script src="js/data/enemies.js"></script>
	<script src="js/data/map.js"></script>
	<script src="js/data/towers.js"></script>
	<script src="js/data/waves.js"></script>
	<script src="js/entities/bullet.js"></script>
	<script src="js/entities/enemy.js"></script>
	<script src="js/entities/tile.js"></script>
	<script src="js/entities/tower.js"></script>
	<script src="js/entities/wave.js"></script>
	<script src="js/states/menu.js"></script>
	<script src="js/states/play.js"></script>
	<script src="js/states/gameover.js"></script>
	<script src="js/game.js"></script>
<?php } ?>