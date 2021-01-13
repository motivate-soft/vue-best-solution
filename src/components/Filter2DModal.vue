<template>
	<div class="modal fade" id="exampleModal4" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-left" role="document">
            <div class="modal-content">
                    <div class="modal-header" id="exampleModal4-header">
                        <h6 class="modal-title" id="exampleModalLabel">2DFilter Select</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div class="accordion" id="accordion2D" role="tablist" aria-multiselectable="true">
                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingOne2D">
                                            <h5 class="mb-0">
                                                <a class="text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseOne2D" role="button" aria-expanded="true" aria-controls="collapseOne2D" @click="makeActive('tab-1')">
                                                    <p class="font-med">emphasis</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseOne2D" class="collapse" v-bind:class="{show: isActiveTab('tab-1')}" role="tabpanel" aria-labelledby="headingOne2D" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-emphasis">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Low pass</button><!--ローパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">High pass</button><!--ハイパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sharpening</button><!--鮮明化-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Median</button><!--メディアン-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Gauss</button><!--ガウス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">High gauss</button><!--ハイガウス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Local equalization</button><!--局部イコライズ-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Flattening</button><!--平坦化-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Rank</button><!--ランク-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Stain removal</button><!--しみ除去-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sigma</button><!--シグマ-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sigma(Median)</button><!--シグマ（中央値）-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingTwo2D">
                                            <h5 class="mb-0">
                                                <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseTwo2D" role="button" aria-expanded="false" aria-controls="collapseTwo" @click="makeActive('tab-2')">
                                                    <p class="font-med">edge</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseTwo2D" class="collapse" v-bind:class="{show: isActiveTab('tab-2')}" role="tabpanel" aria-labelledby="headingTwo2D" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-edge">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sobel</button><!--ソーベル-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Roberts</button><!--ロバーツ-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Laplacian</button><!--ラプラシアン-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Variance</button><!--バリアンス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sobel phase</button><!--ソーベル位相-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Horizontal edge</button><!--水平エッジ-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Canny</button><!--Canny-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sobel</button><!--ソーベル-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Gabor</button><!--ガボール-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Differential interference restoration</button><!--微分干渉復元-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingThree2D">
                                            <h5 class="mb-0">
                                                <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseThree2D" role="button" aria-expanded="false" aria-controls="collapseThree" @click="makeActive('tab-3')">
                                                    <p class="font-med">morphological</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseThree2D" class="collapse" v-bind:class="{show: isActiveTab('tab-3')}" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-morphological">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Cutting</button><!--切断-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Connection</button><!--接続-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Contraction</button><!--収縮-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingFour2D">
                                            <h5 class="mb-0">
                                                <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseFour2D" role="button" aria-expanded="false" aria-controls="collapseFour" @click="makeActive('tab-4')">
                                                    <p class="font-med">kernel</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseFour2D" class="collapse" v-bind:class="{show: isActiveTab('tab-4')}" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-kernel">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Convolution</button><!--コンボリューション-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Morphological</button><!--モフォロジカル-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingFive2D">
                                            <h5 class="mb-0">
                                                <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseFive2D" role="button" aria-expanded="false" aria-controls="collapseFive" @click="makeActive('tab-5')">
                                                    <p class="font-med">specialfilter</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseFive2D" class="collapse" v-bind:class="{show: isActiveTab('tab-5')}" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-specialfilter">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Sculpture</button><!--彫刻-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">background</button><!--背景-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingSix2D">
                                            <h5 class="mb-0">
                                                <a class="collapsed text-body d-block p-1 m-n3" data-toggle="collapse" href="#collapseSix2D" role="button" aria-expanded="false" aria-controls="collapseSix" @click="makeActive('tab-6')">
                                                    <p class="font-med">learge</p>
                                                </a>
                                            </h5>
                                        </div><!-- /.card-header -->
                                        <div id="collapseSix2D" class="collapse" v-bind:class="{show: isActiveTab('tab-6')}" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion2D">
                                            <div class="card-body">
                                                <div class="btn-group-vertical" role="group" aria-label="button-group-2Dfilter-learge">
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Low pass</button><!--ローパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">High pass</button><!--ハイパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">High pass</button><!--ハイパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Band pass</button><!--バンドパス-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Edge +</button><!--エッジ＋-->
                                                    <button type="button" class="btn btn-sm bg-light text-dark">Edge-</button><!--エッジ－-->
                                                </div>
                                            </div><!-- /.card-body -->
                                        </div><!-- /.collapse -->
                                    </div><!-- /.card -->
                            </div><!-- /#accordion -->

                    </div><!-- /modal-body -->
                    <div class="modal-footer" id="exampleModal4-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary">Select</button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'Filter2DModal',
  props: {
    msg: String
  },
  data() {

	return {
		choice: 'tab-1',
	}

  },
  methods: {
		makeActive: function(val) {
            this.choice = val;
            console.log(this.choice);
        },
		isActiveTab: function(val) {
			return this.choice === val;
        },
        closeModal: function() {

            $('#exampleModal4').removeClass('show');
            $('#exampleModal4').hide(200);

        }
  }
}
</script>
