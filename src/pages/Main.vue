<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- col-2 左パネル-->
        <div class="col-2">
          <div>
            <!-- div1 -->
            <div class="card">
              <div class="card-body">
                <ul class="nav nav-tabs float left">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{active : isActiveTab('tab-1')}"
                      role="tab"
                      href="#"
                      @click="makeActive('tab-1')"
                    >
                      <i class="fas fa-graduation-cap"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{active : isActiveTab('tab-2')}"
                      role="tab"
                      href="#"
                      @click="makeActive('tab-2')"
                    >
                      <i class="fas fa-sliders-h"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{active : isActiveTab('tab-3')}"
                      role="tab"
                      href="#"
                      @click="makeActive('tab-3')"
                    >
                      <i class="fas fa-filter"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      v-bind:class="{active : isActiveTab('tab-4')}"
                      role="tab"
                      href="#"
                      @click="makeActive('tab-4')"
                    >
                      <i class="far fa-file"></i>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    role="tabpanel"
                    class="tab-pane"
                    v-bind:class="{active : isActiveTab('tab-1')}"
                    id="tab-1"
                  >
                    <p>Learning</p>
                    <div
                      class="accordion"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                          <p class="mb-0">
                            <a
                              class="text-body d-block p-3 m-n3"
                              data-toggle="collapse"
                              href="#"
                              role="button"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              @click="learningToggle('deep')"
                            >DeepLearning</a>
                          </p>
                        </div>
                        <!-- /.card-header -->
                        <div
                          id="collapseOne"
                          class="collapse"
                          v-bind:class="{show: isLearningState('deep')}"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div class="card body">
                            <div class="card">
                              <div class="card body">
                                <p>Judge</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-play-circle"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-thumbs-up"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-thumbs-down"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card-->

                            <div class="card">
                              <div class="card body">
                                <p>Method Select</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-lightbulb"></i>New
                                  </button>
                                  <button
                                    class="btn btn-light btn-sm"
                                    data-toggle="modal"
                                    @click="showMethodSelectModal"
                                    data-target="#exampleModal"
                                    type="button"
                                  >
                                    <i class="fas fa-lightbulb"></i>Call
                                  </button>
                                  <MethodSelectModal></MethodSelectModal>
                                </div>
                                <!-- /btn-group -->
                              </div>
                            </div>
                            <!-- /card  Method Select-->

                            <div class="card">
                              <div class="card body">
                                <p>Box＆Select</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-location-arrow"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-circle"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-ellipsis-v"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-square"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-grip-lines-vertical"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-eraser"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card-->

                            <div class="card">
                              <div class="card body">
                                <p>ObjectSelect</p>
                                <!-- <p6>Object brightness</p6> -->
                                <h6>Object brightness</h6>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-lightbulb"></i>LightOB
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-lightbulb"></i>BlackOB
                                  </button>
                                </div>
                                <p>Select target</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-hand-pointer"></i>OB
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-layer-group"></i>Area
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-hand-pointer"></i>BG
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card-->

                            <div class="card">
                              <div class="card body">
                                <p>ObjectClass</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-md" type="button">
                                    <img
                                      src="../assets/image/optimisation_light.png"
                                      height="20px"
                                      width="20px"
                                    />Auto
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-hand-pointer"></i>Add
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-trash-alt"></i>Eraze
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card-->

                            <div class="card">
                              <div class="card body">
                                <p>Class＆ObjectStatus</p>
                              </div>
                            </div>
                            <!-- /card-->
                          </div>
                          <!-- card body -->
                        </div>
                        <!-- #collapseOne -->
                      </div>
                      <!-- /card -->

                      <div class="mt-5"></div>
                      <!-- /mt-5 -->

                      <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                          <p class="mb-0">
                            <a
                              class="collapsed text-body d-block p-3 m-n3"
                              data-toggle="collapse"
                              href="#"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                              @click="learningToggle('machine')"
                            >MachineLearning</a>
                          </p>
                        </div>
                        <!-- /.card-header -->

                        <div
                          id="collapseTwo"
                          class="collapse"
                          v-bind:class="{show: isLearningState('machine')}"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div class="card body">
                            <div class="card">
                              <div class="card body">
                                <p>MethodSelect</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-lightbulb"></i>New
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-lightbulb"></i>Call
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card -->

                            <div class="card">
                              <div class="card body">
                                <p>Box＆Select</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-location-arrow"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-circle"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-ellipsis-v"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-square"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-grip-lines-vertical"></i>
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-eraser"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card -->

                            <div class="card">
                              <div class="card body">
                                <p>ObjectSelect</p>
                                <!-- <p6>Object brightness</p6> -->
                                <h6>Object brightness</h6>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-lightbulb"></i>LightOB
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-lightbulb"></i>BlackOB
                                  </button>
                                </div>
                                <p>Select target</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-hand-pointer"></i>OB
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-layer-group"></i>Area
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-hand-pointer"></i>BG
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-trash-alt"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card -->

                            <div class="card">
                              <div class="card body">
                                <p>Count</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-calculator"></i>Count
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="fas fa-undo"></i>Back
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <svg
                                      class="bi bi-arrows-expand"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 16 16"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8zm6-1.5a.5.5 0 00.5-.5V1.5a.5.5 0 00-1 0V6a.5.5 0 00.5.5z"
                                        clip-rule="evenodd"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.354 3.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L8 2.207l1.646 1.647a.5.5 0 00.708 0zM8 9.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V10a.5.5 0 01.5-.5z"
                                        clip-rule="evenodd"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M10.354 12.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L8 13.793l1.646-1.647a.5.5 0 01.708 0z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    Split
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card -->

                            <div class="card">
                              <div class="card body">
                                <p>ObjectClass</p>
                                <div class="btn-group" role="group">
                                  <button class="btn btn-light btn-md" type="button">
                                    <img
                                      src="../assets/image/optimisation_light.png"
                                      height="20px"
                                      width="20px"
                                    />Auto
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-hand-pointer"></i>Add
                                  </button>
                                  <button class="btn btn-light btn-sm" type="button">
                                    <i class="far fa-trash-alt"></i>Eraze
                                  </button>
                                </div>
                              </div>
                            </div>
                            <!-- /card -->

                            <div class="card">
                              <div class="card body">
                                <p>Class＆ObjectStatus</p>
                              </div>
                            </div>
                            <!-- /card -->
                          </div>
                        </div>
                        <!-- / #collapseTwo -->
                      </div>
                      <!-- /card-->
                    </div>
                    <!-- accordion  Learning-->
                  </div>
                  <!-- /#tab-1 -->
                  <div
                    role="tabpanel"
                    class="tab-pane"
                    v-bind:class="{active : isActiveTab('tab-2')}"
                    id="tab-2"
                  >
                    <p>Ajust</p>
                    <div class="card">
                      <div class="card body">
                        <p>BitConversion</p>
                        <div class="btn-group" role="group">
                          <button id="gray8" class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/mono.png" height="10px" width="10px" />8
                          </button>
                          <button id="gray16" class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/mono.png" height="10px" width="10px" />16
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/mono.png" height="10px" width="10px" />32
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/color.png" height="10px" width="10px" />8
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/color.png" height="10px" width="10px" />24
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/color.png" height="10px" width="10px" />48
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>Merge＆Sprit</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/c-sep.png" height="20px" width="20px" />
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/c-merge.png" height="20px" width="20px" />
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/c-drop.png" height="20px" width="20px" />
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal11b"
                            type="button"
                            @click="showMergeSpritSettingModal"
                          >
                            <i class="fas fa-cogs"></i>Set
                          </button>
                          <!-- Modal -->
                          <MergeSpritSettingModal></MergeSpritSettingModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                    <!-- card -->

                    <div class="card">
                      <div class="card body">
                        <p>LightSet</p>
                        <div class="btn-group" role="group">
                          <button id="auto-hist" class="btn btn-light btn-md" type="button">
                            <img
                              src="../assets/image/optimisation_light.png"
                              height="20px"
                              width="20px"
                            />Auto
                          </button>
                          <button class="btn btn-light btn-md" type="button">
                            <img
                              src="../assets/image/baseline_hdr_on_black_48dp.png"
                              height="30px"
                              width="30px"
                            />HDR
                          </button>
                          <button class="btn btn-light btn-md" type="button">
                            <i class="far fa-thumbs-up"></i>Go
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal11"
                            type="button"
                            @click="showLightSettingModal"
                          >
                            <i class="fas fa-cogs"></i>Set
                          </button>
                          <!-- Modal -->
                          <LightSettingModal></LightSettingModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                    <!-- /card-->

                    <div class="card">
                      <div class="card body">
                        <p>Binarization</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <img
                              src="../assets/image/optimisation_light.png"
                              height="20px"
                              width="20px"
                            />Auto
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal11bn"
                            type="button"
                            @click="showBinarizationSettingModal"
                          >
                            <i class="fas fa-sliders-h"></i>Ajust
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <!-- Modal -->
                    <BinarizationSettingModal></BinarizationSettingModal>
                    <!-- /Modal -->

                    <div class="card">
                      <div class="card body">
                        <p>Scale</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-ruler-horizontal"></i>Scale Bar
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <svg
                              class="bi bi-grid-3x3"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z"
                                clip-rule="evenodd"
                              />
                            </svg>Grid
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal10"
                            type="button"
                            @click="showScaleSettingModal"
                          >
                            <i class="fas fa-cogs"></i>Set
                          </button>
                          <!-- Modal -->
                          <ScaleSettingModal></ScaleSettingModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /#tab-2 -->

                  <div
                    role="tabpanel"
                    class="tab-pane"
                    v-bind:class="{active : isActiveTab('tab-3')}"
                    id="tab-3"
                  >
                    <p>Filter</p>
                    <div class="card">
                      <div class="card body">
                        <p>Filter</p>
                        <div class="btn-group" role="group">
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal4"
                            type="button"
                            @click="showFilter2DModal"
                          >
                            <i class="fas fa-filter"></i>2D
                          </button>
                          <!-- Modal -->
                          <Filter2DModal></Filter2DModal>
                          <!-- /Modal 2DFilter Select -->
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal5"
                            type="button"
                            @click="showFilter3DModal"
                          >
                            <i class="fas fa-filter"></i>3D
                          </button>
                          <!-- Modal -->
                          <Filter3DModal></Filter3DModal>
                          <!-- /Modal -->
                        </div>
                        <!-- btn-group -->
                      </div>
                    </div>
                    <!-- /card  Filter -->

                    <div class="card">
                      <div class="card body">
                        <p>Addition＆Subtraction</p>
                        <div class="btn-group" role="group">
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal12"
                            type="button"
                            @click="showCalculationModal"
                          >Calculation</button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal14"
                            type="button"
                            @click="showSubstractionModal"
                          >Subtraction減</button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal2"
                            type="button"
                            @click="showCorrectionModal"
                          >correction</button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal15"
                            type="button"
                            @click="showOptionModal"
                          >option</button>
                        </div>
                        <!-- Modal -->
                        <CalculationModal></CalculationModal>
                        <SubstractionModal></SubstractionModal>
                        <CorrectionModal></CorrectionModal>
                        <OptionModal></OptionModal>
                        <!-- /Modal -->
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>2DDecombolution</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-play-circle"></i>2DGo
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal6"
                            type="button"
                            @click="showSet2DModal"
                          >
                            <i class="fas fa-cogs"></i>2DSet
                          </button>
                          <!-- Modal -->
                          <Set2DModal></Set2DModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>3DDecombolution</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-play-circle"></i>3DGo
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal7"
                            type="button"
                            @click="showSet3DModal"
                          >
                            <i class="fas fa-cogs"></i>3DSet
                          </button>
                          <!-- Modal -->
                          <Set3DModal></Set3DModal>
                          <!-- /Modal -->
                        </div>
                        <!-- btn-group -->
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>FocusStack</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-play-circle"></i>Go
                          </button>
                          <button class="btn btn-light btn-sm" type="button">Alignment</button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal8"
                            type="button"
                            @click="showFocusStackModal"
                          >
                            <i class="fas fa-cogs"></i>Set
                          </button>
                          <!-- Modal -->
                          <FocusStackModal></FocusStackModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                    <!-- /card-->
                  </div>
                  <!-- /#tab-3-->
                  <div
                    role="tabpanel"
                    class="tab-pane"
                    v-bind:class="{active : isActiveTab('tab-4')}"
                    id="tab-4"
                  >
                    <p>File/Edit</p>
                    <div class="card">
                      <div class="card body">
                        <p>Open</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button" id="open-file-button">
                            <i class="fas fa-envelope-open-text"></i>file
                            <input
                              type="file"
                              style="display:none"
                              id="open-file-input"
                              accept="image/*"
                            />
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="far fa-folder-open"></i>holder
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal3"
                            type="button"
                            @click="showFilePositionModal"
                          >
                            <i class="fas fa-map-marked-alt"></i>position
                          </button>
                          <!-- Modal -->
                          <FilePositionModal></FilePositionModal>
                          <!-- /Modal -->
                        </div>
                        <!-- /btn-group -->
                      </div>
                      <!-- /card body -->
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>Save/Load</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button" id="save">
                            <i class="fas fa-save"></i>Save
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            type="button"
                            id="save-as"
                            data-toggle="modal"
                            data-target="#exampleModal0"
                            @click="showSaveAsModal"
                          >
                            <i class="far fa-save"></i>SaveAs
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-file-export"></i>Export
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <i class="fas fa-download"></i>Load
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card body">
                      <p>Copy/Pesto</p>
                      <div class="btn-group" role="group">
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="far fa-copy"></i>Copy
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-cut"></i>Cut
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-paste"></i>Pasto
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="far fa-file"></i>New
                        </button>
                      </div>
                    </div>
                    <div class="card body">
                      <p>Comment</p>
                      <div class="btn-group" role="group">
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-location-arrow"></i>
                        </button>
                        <button class="btn btn-light btn-md" type="button">
                          <i class="fas fa-pen"></i>
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="far fa-circle"></i>
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="far fa-square"></i>
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-grip-lines-vertical"></i>
                        </button>
                        <button class="btn btn-light btn-sm" type="button">
                          <i class="fas fa-eraser"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card body">
                        <p>ChangeDimension</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            Z
                            <i class="fas fa-arrow-right"></i>T
                          </button>
                          <button class="btn btn-light btn-md" type="button">
                            T
                            <i class="fas fa-arrow-right"></i>Z
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal9"
                            type="button"
                            @click="showChangeDimensionModal"
                          >
                            <i class="fas fa-cogs"></i>Set
                          </button>
                          <!-- Modal -->
                          <ChangeDimensionModal></ChangeDimensionModal>
                          <!-- /Modal -->
                        </div>
                      </div>
                    </div>
                    <!-- /card -->
                  </div>
                  <!-- /#tab-4-->
                </div>
              </div>
            </div>
            <!-- /card -->
          </div>
          <!-- /div1 -->
        </div>
        <!-- /col-2 左パネル -->

        <!-- col-8  メイン領域-->
        <div class="col-8" id="drag-drop" style="height: 100vh !important;">
          <div class="h-100" id="map" style="position:absolute;top:0;left:0;right:0;bottom:0;"></div>
          <!-- /#map-->
        </div>
        <!-- /col-8  メイン領域-->

        <!-- col-2 右パネル-->
        <div class="col-2">
          <div class="card">
            <div class="card-body">
              <ul class="nav nav-tabs float-right">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-toggle="tab"
                    href="#"
                    v-bind:class="{active : isActiveTabRight('tab-5')}"
                    @click="makeActiveRight('tab-5')"
                  >
                    <i class="fas fa-microscope"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-toggle="tab"
                    href="#"
                    v-bind:class="{active : isActiveTabRight('tab-6')}"
                    @click="makeActiveRight('tab-6')"
                  >
                    <i class="fas fa-ruler-vertical"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-toggle="tab"
                    href="#"
                    v-bind:class="{active : isActiveTabRight('tab-7')}"
                    @click="makeActiveRight('tab-7')"
                  >
                    <i class="fas fa-poll"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    role="tab"
                    data-toggle="tab"
                    href="#"
                    v-bind:class="{active : isActiveTabRight('tab-8')}"
                    @click="makeActiveRight('tab-8')"
                  >
                    <i class="fas fa-cogs"></i>
                  </a>
                </li>
              </ul>

              <!-- tab-content -->
              <div class="tab-content float-left">
                <!-- #tab-5 ViewControl -->
                <div
                  role="tabpanel"
                  class="tab-pane"
                  v-bind:class="{active : isActiveTabRight('tab-5')}"
                  id="tab-5"
                >
                  <p>ViewControl</p>
                  <div class="card">
                    <div class="card body">
                      <p id="right-text0">96wellPlate</p>
                      <img
                        id="right-image"
                        src="../assets/image/96wellplate.png"
                        width="220px"
                        height="160px"
                        border="1px"
                        alt="96wellplate"
                      />
                      <div class="btn-group" role="group">
                        <button
                          class="btn btn-light btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModal1"
                          type="button"
                          @click="showVesselSelectModal"
                        >
                          <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button
                          class="btn btn-light btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModal13"
                          type="button"
                          id="button13"
                          @click="showVesselExpansionModal"
                        >
                          <i class="fas fa-expand"></i>
                        </button>
                        <!-- Modal -->
                        <VesselExpansionModal></VesselExpansionModal>
                        <!-- /Modal -->
                      </div>

                      <!-- Modal -->
                      <VesselSelectModal></VesselSelectModal>
                      <!-- /Modal -->
                    </div>

                    <div class="card">
                      <div class="card body">
                        <p>Objective</p>
                        <div class="btn-group" role="group">
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/object.png" height="30px" wight="15px" />
                            <p class="font-small">4X</p>
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/object.png" height="30px" wight="15px" />
                            <p class="font-small">10X</p>
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/object.png" height="30px" wight="15px" />
                            <p class="font-small">20X</p>
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/object.png" height="30px" wight="15px" />
                            <p class="font-small">40X</p>
                          </button>
                          <button class="btn btn-light btn-sm" type="button">
                            <img src="../assets/image/object.png" height="30px" wight="15px" />
                            <p class="font-small">100X</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <div class="row">
                          <div class="col-6">
                            <p>ViewMethod</p>
                          </div>
                          <div class="col-1">
                            <button type="button" class="btn btn-primary btn-sm">mono/color</button>
                          </div>
                          <div class="col-5"></div>
                        </div>
                        <div class="btn-group" role="group">
                          <button id="s" class="btn btn-light btn-sm" type="button">
                            <i class="far fa-check-square"></i>S
                          </button>
                          <button id="b" class="btn btn-light btn-sm text-primary" type="button">
                            <i class="far fa-square font-small"></i>B
                          </button>
                          <button id="g" class="btn btn-light btn-sm text-success" type="button">
                            <i class="far fa-square font-small"></i>G
                          </button>
                          <button id="r" class="btn btn-light btn-sm text-danger" type="button">
                            <i class="far fa-square font-small"></i>R
                          </button>
                          <button class="btn btn-light btn-sm text-info" type="button">
                            <i class="far fa-square font-small"></i>C
                          </button>
                          <button
                            class="btn btn-light btn-sm"
                            type="button"
                            style="color: rgb(240, 182, 63)"
                          >
                            <i class="far fa-square font-small"></i>Y
                          </button>
                          <button class="btn btn-light btn-sm" type="button" style="color: magenta">
                            <i class="far fa-square font-small"></i>M
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <div class="row">
                          <div class="col-6">
                            <p>Light</p>
                          </div>
                          <div class="col-1">
                            <button id="reset-btn" type="button" class="btn btn-primary btn-sm">Reset</button>
                          </div>
                          <div class="col-5"></div>
                        </div>
                        <!-- row -->

                        <label for="customRange1">
                          <svg
                            class="bi bi-brightness-high"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </label>
                        <div class="row">
                          <div class="col-9">
                            <input
                              type="range"
                              class="custom-range"
                              min="0"
                              max="100"
                              step="0.1"
                              id="customRange1"
                              oninput="document.getElementById('output1').value=this.value"
                            />
                          </div>
                          <div class="col-3" style="padding: 0;">
                            <!-- <output id="output1">50</output> -->
                            <input id="output1" type="text" style="width: 40px;" value="50" />
                          </div>
                        </div>
                        <label for="customRange2">
                          <svg
                            class="bi bi-circle-half"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 15V1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </label>
                        <div class="row">
                          <div class="col-9">
                            <input
                              type="range"
                              class="custom-range"
                              min="0"
                              max="100"
                              step="0.1"
                              id="customRange2"
                              oninput="document.getElementById('output2').value=this.value"
                            />
                          </div>
                          <div class="col-3" style="padding: 0;">
                            <!-- <output id="output2">50</output> -->
                            <input id="output2" type="text" style="width: 40px;" value="50" />
                          </div>
                        </div>
                        <label for="customRange3">
                          <svg
                            class="bi bi-brightness-low"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z"
                              clip-rule="evenodd"
                            />
                            <circle cx="8" cy="2.5" r=".5" />
                            <circle cx="8" cy="13.5" r=".5" />
                            <circle cx="13.5" cy="8" r=".5" transform="rotate(90 13.5 8)" />
                            <circle cx="2.5" cy="8" r=".5" transform="rotate(90 2.5 8)" />
                            <circle
                              cx="11.889"
                              cy="4.111"
                              r=".5"
                              transform="rotate(45 11.89 4.11)"
                            />
                            <circle
                              cx="4.111"
                              cy="11.889"
                              r=".5"
                              transform="rotate(45 4.11 11.89)"
                            />
                            <circle
                              cx="11.889"
                              cy="11.889"
                              r=".5"
                              transform="rotate(135 11.89 11.889)"
                            />
                            <circle cx="4.111" cy="4.111" r=".5" transform="rotate(135 4.11 4.11)" />
                          </svg>
                        </label>
                        <div class="row">
                          <div class="col-9">
                            <input
                              type="range"
                              class="custom-range"
                              min="-50"
                              max="50"
                              step="0.1"
                              id="customRange3"
                              oninput="document.getElementById('output3').value=this.value"
                            />
                          </div>
                          <div class="col-3" style="padding: 0;">
                            <!-- <output id="output3">1</output> -->
                            <input id="output3" type="text" style="width: 40px;" value="0" />
                          </div>
                        </div>
                        <!-- /row -->
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <div class="row">
                          <div class="col-6">
                            <p>Z-Position</p>
                          </div>
                          <div class="col-1">
                            <button
                              type="button"
                              class="btn btn-primary rounded-pill btn-sm"
                            >3D View</button>
                          </div>
                          <div class="col-5"></div>
                        </div>
                        <svg
                          class="bi bi-arrow-up-down"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M10.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L11 3.707 8.354 6.354a.5.5 0 11-.708-.708l3-3zm-9 7a.5.5 0 01.708 0L5 12.293l2.646-2.647a.5.5 0 11.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M5 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div class="row">
                          <div class="col-9">
                            <input
                              type="range"
                              class="custom-range"
                              id="customRange4"
                              min="1"
                              step="1"
                              orient="vertical"
                              oninput="document.getElementById('output4').value=this.value"
                            />
                          </div>
                          <div class="col-3">
                            <output id="output4"></output>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /card -->

                    <div class="card">
                      <div class="card body">
                        <p>TineLine</p>
                        <label for="customRange5">
                          <i class="fas fa-play"></i>
                        </label>
                        <div class="row">
                          <div class="col-9">
                            <input
                              type="range"
                              class="custom-range"
                              id="customRange5"
                              min="1"
                              step="1"
                              oninput="document.getElementById('output5').value=this.value"
                            />
                          </div>
                          <div class="col-3">
                            <output id="output5"></output>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- tab-5 -->
                <!-- /#tab-5 ViewControl -->

                <!-- #tab-6 Measure -->
                <div
                  role="tabpanel"
                  class="tab-pane"
                  v-bind:class="{active : isActiveTabRight('tab-6')}"
                  id="tab-6"
                >
                  <p>Measure</p>
                  <!-- nav-->
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="before">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" @click="makeActiveRight6('tab-6-1')">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" @click="makeActiveRight6('tab-6-2')">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" @click="makeActiveRight6('tab-6-3')">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                    <!-- pagination -->
                  </nav>
                  <!-- /nav -->

                  <div class="card" v-bind:class="measureViewState('tab-6-1')" id="M1">
                    <div class="card-body">
                      <!-- Analysis Method -->
                      <div class="card">
                        <div class="card-body">
                          <p>Analysis Method</p>
                          <div class="btn-group" role="group">
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModalam1"
                              type="button"
                            >Setting call</button>
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModalam2"
                              type="button"
                            >Go</button>
                          </div>
                        </div>
                      </div>
                      <!-- /Analysis Method -->
                      <!-- Learning Method -->
                      <div class="card">
                        <div class="card-body">
                          <p>Learning Method</p>
                          <div class="btn-group" role="group">
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal16"
                              type="button"
                              @click="showLearningDlCallModal"
                            >DL call</button>
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal17"
                              type="button"
                              @click="showLearningMlCallModal"
                            >ML call</button>
                            <button class="btn btn-light btn-sm" type="button">Go</button>
                          </div>
                        </div>
                      </div>
                      <!-- /Learning Method -->
                      <!-- Object Method -->
                      <div class="card">
                        <div class="card-body">
                          <p>Object Method</p>
                          <div class="btn-group" role="group">
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal18"
                              type="button"
                              @click="showObjectDlCallModal"
                            >DL call</button>
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal19"
                              type="button"
                              @click="showObjectMlCallModal"
                            >ML call</button>
                          </div>
                        </div>
                      </div>
                      <!-- /Object Method -->
                      <!-- Modal Learning DL call-->
                      <LearningDlCallModal></LearningDlCallModal>
                      <LearningMlCallModal></LearningMlCallModal>
                      <ObjectDlCallModal></ObjectDlCallModal>
                      <ObjectMlCallModal></ObjectMlCallModal>
                    </div>
                    <!-- /card-body -->
                  </div>
                  <!-- /card M1-->

                  <div class="card" v-bind:class="measureViewState('tab-6-2')" id="M2">
                    <!-- card M2-->
                    <div class="card-body">
                      <!-- card-body -->
                      <div class="card">
                        <div class="card-body">
                          <p>Vessel Select</p>
                        </div>
                      </div>
                      <!-- /card Vessel Select -->

                      <div class="card">
                        <div class="card-body">
                          <p>Rectangle Select</p>
                        </div>
                      </div>
                      <!-- /card Rectangle Select -->

                      <div class="card">
                        <div class="card-body">
                          <p>Object Select</p>
                        </div>
                        <!-- /card Object Select -->
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <p>ViewMethod Select</p>
                        </div>
                      </div>
                      <!-- /card ViewMethod Select -->

                      <div class="card">
                        <div class="card-body">
                          <p>Light Ajust</p>
                        </div>
                      </div>
                      <!-- /card Light Ajust Select -->

                      <div class="card">
                        <div class="card-body">
                          <p>Zposition Select</p>
                        </div>
                      </div>
                      <!-- /card Zposition Select -->

                      <div class="card">
                        <div class="card-body">
                          <p>TimeLine Select</p>
                        </div>
                      </div>
                      <!-- /card TimeLine Select -->
                    </div>
                    <!-- /card-body -->
                  </div>
                  <!-- /card M2-->

                  <div class="card" v-bind:class="measureViewState('tab-6-3')" id="M3">
                    <!-- card M3-->
                    <div class="card-body">
                      <!-- card-body -->
                      <div class="card">
                        <div class="card-body">
                          <p>Measure Contents</p>
                          <div class="btn-group" role="group">
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal20"
                              type="button"
                              date-toggle="tooltip"
                              title="Measurement item"
                            >M i</button>測定項目
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal21"
                              date-toggle="tooltip"
                              title="sorting setting"
                            >S s</button>選別設定
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal22"
                              type="button"
                              date-toggle="tooltip"
                              title="sorting"
                            >S</button>選別
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal23"
                              type="button"
                              date-toggle="tooltip"
                              title="Configuation"
                            >C</button>設定
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal24"
                              type="button"
                              date-toggle="tooltip"
                              title="Load"
                            >L</button>
                            <button
                              class="btn btn-light btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal25"
                              type="button"
                              date-toggle="tooltip"
                              title="Save"
                            >S</button>
                          </div>
                        </div>
                      </div>
                      <!-- /card Measure Contents-->

                      <div class="card">
                        <div class="card-body">
                          <p>Method Save</p>
                        </div>
                      </div>
                      <!-- /card Method Save -->

                      <div class="card">
                        <div class="card-body">
                          <p>GO</p>
                          <div class="btn-group" role="group">
                            <button class="btn btn-light btn-sm" type="button">Go</button>
                            <button class="btn btn-light btn-sm" type="button">stop</button>
                            <button class="btn btn-light btn-sm" type="button">save</button>
                            <button class="btn btn-light btn-sm" type="button">cancel</button>
                          </div>
                        </div>
                      </div>
                      <!-- /card GO -->
                    </div>
                    <!-- /card-body -->
                  </div>
                  <!-- card M3-->

                  <!-- Modal 測定項目 -->
                  <div
                    class="modal fade"
                    id="exampleModal20"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-xl modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal20-header">
                          <h6 class="modal-title" id="exampleModalLabel20">Measurement item</h6>
                          <!--測定項目-->
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-5">
                              <p>Measurable items</p>
                              <!--測定可能な測定項目-->
                              <div
                                class="accordion"
                                id="accordionmc"
                                role="tablist"
                                aria-multiselectable="true"
                              >
                                <div class="card">
                                  <div class="card-header" role="tab" id="headingOnemc">
                                    <h5 class="mb-0">
                                      <a
                                        class="text-body d-block p-1 m-n3"
                                        data-toggle="collapse"
                                        href="#collapseOnemc"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                      >
                                        <p class="font-med">angle</p>
                                        <!--角度-->
                                      </a>
                                    </h5>
                                  </div>
                                  <!-- /.card-header -->
                                  <div
                                    id="collapseOnemc"
                                    class="collapse show"
                                    role="tabpanel"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionmc"
                                  >
                                    <div class="card-body">
                                      <div
                                        class="btn-group-vertical"
                                        role="group"
                                        aria-label="button-group-kakudo"
                                      >
                                        <div class="row">
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >angle</button>
                                            <!--角度-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >radius</button>
                                            <!--半径-->
                                          </div>
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small">Center X coordinate</p>
                                            </button>
                                            <!--中心X座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small">Center Y coordinate</p>
                                            </button>
                                            <!--中心Y座標-->
                                          </div>
                                        </div>
                                        <!-- row -->
                                      </div>
                                    </div>
                                    <!-- /.card-body -->
                                  </div>
                                  <!-- /.collapse -->
                                </div>
                                <!-- /.card -->

                                <div class="card">
                                  <div class="card-header" role="tab" id="headingTwomc">
                                    <h5 class="mb-0">
                                      <a
                                        class="collapsed text-body d-block p-1 m-n3"
                                        data-toggle="collapse"
                                        href="#collapseTwomc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                      >
                                        <p class="font-med">Optimal shape</p>
                                        <!--最適図形-->
                                      </a>
                                    </h5>
                                  </div>
                                  <!-- /.card-header -->
                                  <div
                                    id="collapseTwomc"
                                    class="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionmc"
                                  >
                                    <div class="card-body">
                                      <div
                                        class="btn-group-vertical"
                                        role="group"
                                        aria-label="button-group-saitekizukei"
                                      >
                                        <div class="row">
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >PMSE</button>
                                            <!--PMSE-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >Minimum distance</button>
                                            <!--最小距離-->
                                          </div>
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >Maximum distance</button>
                                            <!--最大距離-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >Average distance</button>
                                            <!--平均距離-->
                                          </div>
                                        </div>
                                        <!-- row-->
                                      </div>
                                    </div>
                                    <!-- /.card-body -->
                                  </div>
                                  <!-- /.collapse -->
                                </div>
                                <!-- /.card -->

                                <div class="card">
                                  <div class="card-header" role="tab" id="headingTwomc">
                                    <h5 class="mb-0">
                                      <a
                                        class="collapsed text-body d-block p-1 m-n3"
                                        data-toggle="collapse"
                                        href="#collapseThreemc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                      >
                                        <p class="font-med">line</p>
                                        <!--線-->
                                      </a>
                                    </h5>
                                  </div>
                                  <!-- /.card-header -->
                                  <div
                                    id="collapseThreemc"
                                    class="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionmc"
                                  >
                                    <div class="card-body">
                                      <div
                                        class="btn-group-vertical"
                                        role="group"
                                        aria-label="button-group-sen"
                                      >
                                        <div class="row">
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Position XY coordinate</p>
                                            </button>
                                            <!--位置XY座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Position X coordinate</p>
                                            </button>
                                            <!--位置X座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Position Y coordinate</p>
                                            </button>
                                            <!--位置Y座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Arc angle</p>
                                            </button>
                                            <!--円弧角-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Arc center X coordinate</p>
                                            </button>
                                            <!--円弧中心X座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Arc center Y coordinate</p>
                                            </button>
                                            <!--円弧中心Y座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Arc radius</p>
                                            </button>
                                            <!--円弧半径-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >angle</button>
                                            <!--角度-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >Chord length</button>
                                            <!--弦長-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Chord length ratio</p>
                                            </button>
                                            <!--弦長比-->
                                          </div>
                                          <div class="col-6">
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Start point XY coordinates</p>
                                            </button>
                                            <!--始点XY座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Start point X coordinate</p>
                                            </button>
                                            <!--始点X座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Start point Y coordinate</p>
                                            </button>
                                            <!--始点Y座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">End XY coordinate</p>
                                            </button>
                                            <!--終点XY座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">End X coordinate</p>
                                            </button>
                                            <!--終点X座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">End Y coordinate</p>
                                            </button>
                                            <!--終点Y座標-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Number of end points</p>
                                            </button>
                                            <!--終点の長さ-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">length</p>
                                            </button>
                                            <!--長さ-->
                                            <button
                                              type="button"
                                              class="btn btn-sm bg-light text-dark"
                                            >
                                              <p class="font-small2">Length (uncalibrated)</p>
                                            </button>
                                            <!--長さ（未校正）-->
                                          </div>
                                        </div>
                                        <!-- row -->
                                      </div>
                                    </div>
                                    <!-- /.card-body -->
                                  </div>
                                  <!-- /.collapse -->
                                </div>
                                <!-- /.card -->
                              </div>
                              <!-- /#accordion -->
                              <!--測定可能な測定項目-->

                              <div class="card">
                                <!--対象物-->
                                <div class="card-header" role="tab" id="headingFourmc">
                                  <h5 class="mb-0">
                                    <a
                                      class="collapsed text-body d-block p-1 m-n3"
                                      data-toggle="collapse"
                                      href="#collapseFourmc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="collapseFour"
                                    >
                                      <p class="font-med">Object</p>
                                      <!--対象物-->
                                    </a>
                                  </h5>
                                </div>
                                <!-- /.card-header -->
                                <div
                                  id="collapseFourmc"
                                  class="collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingFour"
                                  data-parent="#accordionmc"
                                >
                                  <div class="card-body">
                                    <div
                                      class="btn-group-vertical"
                                      role="group"
                                      aria-label="button-group-taishoubutu"
                                    >
                                      <div class="row">
                                        <div class="col-6">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >class</button>
                                          <!--クラス-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >class name</button>
                                          <!--クラス名-->
                                        </div>
                                        <div class="col-6">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >parent</button>
                                          <!--親-->
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- /.card-body -->
                                </div>
                                <!-- /.collapse -->
                              </div>
                              <!-- /.card 対象物-->

                              <div class="card">
                                <div class="card-header" role="tab" id="headingFivemc">
                                  <h5 class="mb-0">
                                    <a
                                      class="collapsed text-body d-block p-1 m-n3"
                                      data-toggle="collapse"
                                      href="#collapseFivemc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="collapseFive"
                                    >
                                      <p class="font-med">point</p>
                                      <!--点-->
                                    </a>
                                  </h5>
                                </div>
                                <!-- /.card-header -->
                                <div
                                  id="collapseFivemc"
                                  class="collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingFive"
                                  data-parent="#accordionmc"
                                >
                                  <div class="card-body">
                                    <div
                                      class="btn-group-vertical"
                                      role="group"
                                      aria-label="button-group-ten"
                                    >
                                      <div class="row">
                                        <div class="col-6">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >Position XY coordinate</button>
                                          <!--位置XY座標-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >Position X coordinate</button>
                                          <!--位置X座標-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >Position Y coordinate</button>
                                          <!--位置Y座標-->
                                        </div>
                                        <div class="col-6">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >Brightness (uncalibrated)</button>
                                          <!--輝度（未校正）-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark"
                                          >concentration</button>
                                          <!--濃度-->
                                        </div>
                                      </div>
                                      <!-- row -->
                                    </div>
                                  </div>
                                  <!-- /.card-body -->
                                </div>
                                <!-- /.collapse -->
                              </div>
                              <!-- /.card  点-->

                              <div class="card">
                                <div class="card-header" role="tab" id="headingSixmc">
                                  <h5 class="mb-0">
                                    <a
                                      class="collapsed text-body d-block p-1 m-n3"
                                      data-toggle="collapse"
                                      href="#collapseSixmc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="collapseSix"
                                    >
                                      <p class="font-med">領域</p>
                                      <!--領域-->
                                    </a>
                                  </h5>
                                </div>
                                <!-- /.card-header -->
                                <div
                                  id="collapseSixmc"
                                  class="collapse"
                                  role="tabpanel"
                                  aria-labelledby="headingSix"
                                  data-parent="#accordionmc"
                                >
                                  <div class="card-body">
                                    <div
                                      class="btn-group-vertical"
                                      role="group"
                                      aria-label="button-group-ryouiki"
                                    >
                                      <div class="row">
                                        <div class="col-4">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc Ⅰ1</button>
                                          <!--Coloc Ⅰ1-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc Ⅰ2</button>
                                          <!--Coloc Ⅰ2-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc Intersection</button>
                                          <!--Coloc Intersection-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc K1</button>
                                          <!--Coloc K1-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc K2</button>
                                          <!--Coloc K2-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc M1</button>
                                          <!--Coloc M1-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc M2</button>
                                          <!--Coloc M2-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc Overlap</button>
                                          <!--Coloc Overlap-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc Peason</button>
                                          <!--Coloc Peason-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Coloc PeasonAll</button>
                                          <!--Coloc PeasonAll-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Lab a component</button>
                                          <!--Labのa成分-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Lab b component</button>
                                          <!--Labのb成分-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Lab L component</button>
                                          <!--LabのL成分-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >YIQ color component Y</button>
                                          <!--YIQの色成分Y-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >YIQ color component I</button>
                                          <!--YIQの色成分I-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >YIQ color component Q</button>
                                          <!--YIQの色成分Q-->
                                        </div>
                                        <div class="col-4">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Class number</button>
                                          <!--クラス番号-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Size count</button>
                                          <!--サイズカウント-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Number of nested children</button>
                                          <!--ネストされた子の個数-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Nested child number</button>
                                          <!--ネストされた子の番号-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Nesting depth</button>
                                          <!--ネスト深さ-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Nesting parent number</button>
                                          <!--ネスト親の番号-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Fourier descriptor</button>
                                          <!--フーリエ記述子-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Ferret, minimal</button>
                                          <!--フェレ系,最小-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Ferret, max</button>
                                          <!--フェレ系,最大-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Ferret, average</button>
                                          <!--フェレ系,平均-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Ferret system, aggregation</button>
                                          <!--フェレ系,集約-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Fractal dimension</button>
                                          <!--フラクタル次元-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Circularity</button>
                                          <!--円形度-->
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >Lumpiness</button>
                                          <!--塊状度-->
                                        </div>
                                        <div class="col-4">
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                          <button
                                            type="button"
                                            class="btn btn-sm bg-light text-dark font-small2"
                                          >クラス番号</button>
                                        </div>
                                        <!-- col-4 -->
                                      </div>
                                      <!-- row -->
                                    </div>
                                    <!-- /btn-group-vertical -->
                                  </div>
                                  <!-- /.card-body -->
                                </div>
                                <!-- /.collapse -->
                              </div>
                              <!-- /.card 領域-->
                            </div>
                            <!-- col5 -->

                            <div class="col-1">
                              <p></p>
                            </div>
                            <!-- /col-1 -->

                            <div class="col-6">
                              <p></p>
                              <!-- Measurement items used--使用する測定項目-->
                              <div class="card">
                                <div class="card body">
                                  <ul class="nav nav-tabs">
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#kakudo"
                                        class="nav-link active font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="kakudo"
                                        aria-selected="true"
                                      >angle</a>
                                    </li>
                                    <!--角度-->
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#saitekikai"
                                        class="nav-link font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="saitekikai"
                                        aria-selected="false"
                                      >Optimal shape</a>
                                    </li>
                                    <!--最適図形-->
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#sen"
                                        class="nav-link font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="sen"
                                        aria-selected="false"
                                      >line</a>
                                    </li>
                                    <!--線-->
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#taishoubutu"
                                        class="nav-link font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="taishoubutu"
                                        aria-selected="false"
                                      >object</a>
                                    </li>
                                    <!--対象物-->
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#ten"
                                        class="nav-link font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="ten"
                                        aria-selected="false"
                                      >point</a>
                                    </li>
                                    <!--点-->
                                    <li class="nav-item nav-small">
                                      <a
                                        href="#ryouiki"
                                        class="nav-link font-small2"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="ryouiki"
                                        aria-selected="false"
                                      >region</a>
                                    </li>
                                    <!--領域-->
                                  </ul>
                                  <!-- パネル部分 -->
                                  <div id="myTabContent" class="tab-content mt-3">
                                    <div
                                      id="kakudo"
                                      class="tab-pane active"
                                      role="tabpanel"
                                      aria-labelledby="kakudo-tab"
                                    >angle</div>
                                    <!--角度-->
                                    <div
                                      id="saitekikai"
                                      class="tab-pane"
                                      role="tabpanel"
                                      aria-labelledby="saitekikai-tab"
                                    >Optimal illustration</div>
                                    <!--最適図解-->
                                    <div
                                      id="sen"
                                      class="tab-pane"
                                      role="tabpanel"
                                      aria-labelledby="sen-tab"
                                    >line</div>
                                    <!--線-->
                                    <div
                                      id="taishoubutu"
                                      class="tab-pane"
                                      role="tabpanel"
                                      aria-labelledby="taishoubutu-tab"
                                    >object</div>
                                    <!--対象物-->
                                    <div
                                      id="ten"
                                      class="tab-pane"
                                      role="tabpanel"
                                      aria-labelledby="ten-tab"
                                    >point</div>
                                    <!--点-->
                                    <div
                                      id="ryouiki"
                                      class="tab-pane"
                                      role="tabpanel"
                                      aria-labelledby="ryuiki-tab"
                                    >region</div>
                                    <!--領域-->
                                  </div>
                                </div>
                              </div>
                              <!-- /card -->
                              <!-- Measurement items used--使用する測定項目-->
                            </div>
                            <!-- /col-6 -->
                          </div>
                          <!-- /row -->
                        </div>
                        <div class="modal-footer" id="exampleModa20-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                      <!-- modal-content -->
                    </div>
                  </div>
                  <!-- /Modal 測定項目 -->

                  <!-- Modal 選別設定 -->
                  <div
                    class="modal fade"
                    id="exampleModal21"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal21-header">
                          <h6 class="modal-title" id="exampleModalLabel21">Sorting setting</h6>
                          <!--選別設定-->
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer" id="exampleModa21-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Modal 選別設定 -->

                  <!-- Modal 選別-->
                  <div
                    class="modal fade"
                    id="exampleModal22"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal22-header">
                          <h6 class="modal-title" id="exampleModalLabel22">sorting</h6>
                          <!--選別-->
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer" id="exampleModa22-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Modal 選別-->

                  <!-- Modal 設定-->
                  <div
                    class="modal fade"
                    id="exampleModal23"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal23-header">
                          <h6 class="modal-title" id="exampleModalLabel23">setting</h6>
                          <!--設定-->
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer" id="exampleModa23-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Modal 設定-->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal24"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal24-header">
                          <h6 class="modal-title" id="exampleModalLabel24">Load</h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer" id="exampleModa24-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Modal -->

                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal25"
                    data-backdrop="false"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-left" role="document">
                      <div class="modal-content">
                        <div class="modal-header" id="exampleModal25-header">
                          <h6 class="modal-title" id="exampleModalLabel25">Save</h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer" id="exampleModa25-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Select</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Modal -->
                </div>
                <!-- /#tab-6 -->
                <!-- /#tab-6 Measure -->

                <!-- #tab-7 Report -->
                <!-- tab-7 -->
                <div
                  role="tabpanel"
                  class="tab-pane"
                  v-bind:class="{active : isActiveTabRight('tab-7')}"
                  id="tab-7"
                >
                  <p>Report</p>
                </div>
                <!-- /tab-7-->
                <!-- /#tab-7 Report -->

                <!-- #tab-8 Setting -->
                <!-- tab-8 -->
                <div
                  role="tabpanel"
                  class="tab-pane"
                  v-bind:class="{active : isActiveTabRight('tab-8')}"
                  id="tab-8"
                >
                  <p>Setting</p>
                </div>
                <!-- /tab-8 -->
                <!-- /#tab-8 Setting -->
              </div>
              <!-- /tab-content -->
            </div>
            <!-- card-body -->
          </div>
          <!-- card -->
        </div>
        <!-- /col-2 右パネル-->
      </div>
      <!-- /row -->
    </div>
    <!-- /container-fluid -->
    <!-- </div>
    </div> いらない？-->
    <!-- Modal -->
    <SaveAsModal></SaveAsModal>
  </div>
</template>

<script>
import $ from "jquery";
import MethodSelectModal from "../components/MethodSelectModal.vue";
import MergeSpritSettingModal from "../components/MergeSpritSettingModal.vue";
import LightSettingModal from "../components/LightSettingModal.vue";
import BinarizationSettingModal from "../components/BinarizationSettingModal.vue";
import ScaleSettingModal from "../components/ScaleSettingModal.vue";
import Filter2DModal from "../components/Filter2DModal.vue";
import Filter3DModal from "../components/Filter3DModal.vue";
import CalculationModal from "../components/CalculationModal.vue";
import SubstractionModal from "../components/SubstractionModal.vue";
import CorrectionModal from "../components/CorrectionModal.vue";
import OptionModal from "../components/OptionModal.vue";
import Set2DModal from "../components/Set2DModal.vue";
import Set3DModal from "../components/Set3DModal.vue";
import FocusStackModal from "../components/FocusStackModal.vue";
import FilePositionModal from "../components/FilePositionModal.vue";
import ChangeDimensionModal from "../components/ChangeDimensionModal.vue";
import VesselSelectModal from "../components/VesselSelectModal.vue";
import VesselExpansionModal from "../components/VesselExpansionModal.vue";
import LearningDlCallModal from "../components/LearningDlCallModal.vue";
import LearningMlCallModal from "../components/LearningMlCallModal.vue";
import ObjectDlCallModal from "../components/ObjectDlCallModal.vue";
import ObjectMlCallModal from "../components/ObjectMlCallModal.vue";
import SaveAsModal from "../components/SaveAsModal.vue";

export default {
  name: "Main",
  props: {
    msg: String
  },
  components: {
    MethodSelectModal,
    MergeSpritSettingModal,
    LightSettingModal,
    BinarizationSettingModal,
    ScaleSettingModal,
    Filter2DModal,
    Filter3DModal,
    CalculationModal,
    SubstractionModal,
    CorrectionModal,
    OptionModal,
    Set2DModal,
    Set3DModal,
    FocusStackModal,
    FilePositionModal,
    ChangeDimensionModal,
    VesselSelectModal,
    VesselExpansionModal,
    LearningDlCallModal,
    LearningMlCallModal,
    ObjectDlCallModal,
    ObjectMlCallModal,
    SaveAsModal
  },
  data() {
    return {
      choice: "tab-1",
      choiceright: "tab-5",
      choiceright6: "tab-6-1",
      learningstate: "deep"
    };
  },
  methods: {
    makeActive: function(val) {
      this.choice = val;
      console.log(this.choice);
    },
    isActiveTab: function(val) {
      return this.choice === val;
    },
    makeActiveRight: function(val) {
      this.choiceright = val;
      console.log(this.choiceright);
    },
    isActiveTabRight: function(val) {
      return this.choiceright === val;
    },
    makeActiveRight6: function(val) {
      this.choiceright6 = val;
      console.log(this.choiceright6);
    },
    isActiveTabRight6: function(val) {
      return this.choiceright6 === val;
    },
    measureViewState: function(val) {
      return this.choiceright6 === val
        ? "measure-visible"
        : "measure-invisible";
    },
    learningToggle: function(val) {
      if (this.learningstate === val) {
        this.learningstate = "";
      } else {
        this.learningstate = val;
      }
    },
    isLearningState: function(val) {
      return this.learningstate === val;
    },
    showMethodSelectModal: function() {
      $("#exampleModal").addClass("show");
      $("#exampleModal").show();
    },
    showMergeSpritSettingModal: function() {
      $("#exampleModal11b").addClass("show");
      $("#exampleModal11b").show();
    },
    showLightSettingModal: function() {
      $("#exampleModal11").addClass("show");
      $("#exampleModal11").show();
    },
    showBinarizationSettingModal: function() {
      $("#exampleModal11bn").addClass("show");
      $("#exampleModal11bn").show();
    },
    showScaleSettingModal: function() {
      $("#exampleModal10").addClass("show");
      $("#exampleModal10").show();
    },
    showFilter2DModal: function() {
      $("#exampleModal4").addClass("show");
      $("#exampleModal4").show();
    },
    showFilter3DModal: function() {
      $("#exampleModal5").addClass("show");
      $("#exampleModal5").show();
    },
    showCalculationModal: function() {
      $("#exampleModal12").addClass("show");
      $("#exampleModal12").show();
    },
    showSubstractionModal: function() {
      $("#exampleModal14").addClass("show");
      $("#exampleModal14").show();
    },
    showCorrectionModal: function() {
      $("#exampleModal2").addClass("show");
      $("#exampleModal2").show();
    },
    showOptionModal: function() {
      $("#exampleModal15").addClass("show");
      $("#exampleModal15").show();
    },
    showSet2DModal: function() {
      $("#exampleModal6").addClass("show");
      $("#exampleModal6").show();
    },
    showSet3DModal: function() {
      $("#exampleModal7").addClass("show");
      $("#exampleModal7").show();
    },
    showFocusStackModal: function() {
      $("#exampleModal8").addClass("show");
      $("#exampleModal8").show();
    },
    showFilePositionModal: function() {
      $("#exampleModal3").addClass("show");
      $("#exampleModal3").show();
    },
    showChangeDimensionModal: function() {
      $("#exampleModal9").addClass("show");
      $("#exampleModal9").show();
    },
    showVesselSelectModal: function() {
      $("#exampleModal1").addClass("show");
      $("#exampleModal1").show();
    },
    showVesselExpansionModal: function() {
      $("#exampleModal13").addClass("show");
      $("#exampleModal13").show();
    },
    showLearningDlCallModal: function() {
      $("#exampleModal16").addClass("show");
      $("#exampleModal16").show();
    },
    showLearningMlCallModal: function() {
      $("#exampleModal17").addClass("show");
      $("#exampleModal17").show();
    },
    showObjectDlCallModal: function() {
      $("#exampleModal18").addClass("show");
      $("#exampleModal18").show();
    },
    showObjectMlCallModal: function() {
      $("#exampleModal19").addClass("show");
      $("#exampleModal19").show();
    },
    showSaveAsModal: function() {
      $("#exampleModal0").addClass("show");
      $("#exampleModal0").show();
	},
	changeImage: function(element) {
    // 引数としてHTMLの要素(button)を取得します。そのbutton要素のなかのimg要素のsrc属性をright-imageのsrc属性にいれる。
		const rightImage = document.getElementById('right-image');
		rightImage.src = element.children[0].src;
		document.getElementById('right-text0').innerText = element.innerText;
		// right-imageのsrc属性をvessel-imageのsrc属性に入れる。
		document.getElementById('vessel-image').src = document.getElementById('right-image').src;
	},
  },
  mounted() {
    let recaptchaScript1 = document.createElement("script");
    recaptchaScript1.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.5.1.min.js"
    );
    document.head.appendChild(recaptchaScript1);
    let recaptchaScript2 = document.createElement("script");
    recaptchaScript2.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    );
    document.head.appendChild(recaptchaScript2);
    let recaptchaScript3 = document.createElement("script");
    recaptchaScript3.setAttribute(
      "src",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    );
    document.head.appendChild(recaptchaScript3);
    let recaptchaScript4 = document.createElement("script");
    recaptchaScript4.setAttribute(
      "src",
      "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    );
    document.head.appendChild(recaptchaScript4);
    let recaptchaScript5 = document.createElement("script");
    recaptchaScript5.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"
    );

    iCanDrag("exampleModal0", "exampleModal0-header");
    iCanDrag("exampleModal0", "exampleModal0-footer");
    iCanDrag("exampleModal", "exampleModal-header");
    iCanDrag("exampleModal", "exampleModal-footer");
    iCanDrag("exampleModal1", "exampleModal1-header");
    iCanDrag("exampleModal1", "exampleModal1-footer");
    iCanDrag("exampleModal2", "exampleModal2-header");
    iCanDrag("exampleModal2", "exampleModal2-footer");
    iCanDrag("exampleModal3", "exampleModal3-header");
    iCanDrag("exampleModal3", "exampleModal3-footer");
    iCanDrag("exampleModal4", "exampleModal4-header");
    iCanDrag("exampleModal4", "exampleModal4-footer");
    iCanDrag("exampleModal5", "exampleModal5-header");
    iCanDrag("exampleModal5", "exampleModal5-footer");
    iCanDrag("exampleModal6", "exampleModal6-header");
    iCanDrag("exampleModal6", "exampleModal6-footer");
    iCanDrag("exampleModal7", "exampleModal7-header");
    iCanDrag("exampleModal7", "exampleModal7-footer");
    iCanDrag("exampleModal8", "exampleModal8-header");
    iCanDrag("exampleModal8", "exampleModal8-footer");
    iCanDrag("exampleModal9", "exampleModal9-header");
    iCanDrag("exampleModal9", "exampleModal9-footer");
    iCanDrag("exampleModal10", "exampleModal10-header");
    iCanDrag("exampleModal10", "exampleModal10-footer");
    iCanDrag("exampleModal11", "exampleModal11-header");
    iCanDrag("exampleModal11", "exampleModal11-footer");
    iCanDrag("exampleModal12", "exampleModal12-header");
    iCanDrag("exampleModal12", "exampleModal12-footer");
    iCanDrag("exampleModal13", "exampleModal13-header");
    iCanDrag("exampleModal13", "exampleModal13-footer");
    iCanDrag("exampleModal14", "exampleModal14-header");
    iCanDrag("exampleModal14", "exampleModal14-footer");
    iCanDrag("exampleModal15", "exampleModal15-header");
    iCanDrag("exampleModal15", "exampleModal15-footer");
    iCanDrag("exampleModal11b", "exampleModal11b-header");
    iCanDrag("exampleModal11b", "exampleModal11b-footer");
    iCanDrag("exampleModal16", "exampleModal16-header");
    iCanDrag("exampleModal16", "exampleModal16-footer");
    iCanDrag("exampleModal17", "exampleModal17-header");
    iCanDrag("exampleModal17", "exampleModal17-footer");
    iCanDrag("exampleModal18", "exampleModal18-header");
    iCanDrag("exampleModal18", "exampleModal18-footer");
    iCanDrag("exampleModal19", "exampleModal19-header");
    iCanDrag("exampleModal19", "exampleModal19-footer");
    iCanDrag("exampleModal20", "exampleModal20-header");
    iCanDrag("exampleModal20", "exampleModal20-footer");
    iCanDrag("exampleModal121", "exampleModal21-header");
    iCanDrag("exampleModal121", "exampleModal21-footer");
    iCanDrag("exampleModal122", "exampleModal22-header");
    iCanDrag("exampleModal122", "exampleModal22-footer");
    iCanDrag("exampleModal23", "exampleModal23-header");
    iCanDrag("exampleModal23", "exampleModal23-footer");
    iCanDrag("exampleModal24", "exampleModal24-header");
    iCanDrag("exampleModal24", "exampleModal24-footer");
    iCanDrag("exampleModal25", "exampleModal25-header");
    iCanDrag("exampleModal25", "exampleModal25-footer");
    iCanDrag("exampleModal26", "exampleModal26-header");
    iCanDrag("exampleModal26", "exampleModal26-footer");

    function iCanDrag(targetID, listenerID) {
      //IDから要素の取得
      let element = document.getElementById(targetID);
      //ドラッグイベントを監視する要素
      let listener = document.getElementById(listenerID);
      //移動中かどうかのフラグ
      let dragging;
      // 座標
      let tLeft, tTop;
      document.addEventListener("mousedown", function(e) {
        if (e.target === listener) {
          // マウスがクリックされた場合、 クリック対象が指定した要素なら実行
          dragging = true; // 移動中を示すフラグに真の値を入れます。
          // 座標を取得して設定する
          let moveElemRect = element.getBoundingClientRect();
          tLeft = e.clientX - moveElemRect.left;
          tTop = e.clientY - moveElemRect.top;
        }
      });
      document.addEventListener("mouseup", function() {
        // マウスを外したらフラグを偽の値にします。
        dragging = false;
      });
      document.addEventListener("mousemove", function(e) {
        if (dragging) {
          // フラグが真の値、つまり移動中であれば、マウスの座標を要素の座標に入れます。
          let moveX = e.clientX - tLeft;
          let moveY = e.clientY - tTop;
          element.style.left = moveX + "px";
          element.style.top = moveY + "px";
        }
      });
	}

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "../assets/css/style.css";
@import "../assets/css/Control.FullScreen.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "../assets/open-iconic/font/css/open-iconic-bootstrap.min.css";
@import "https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css";
@import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
@import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css";

.measure-invisible {
  display: none;
}
.measure-visible {
  display: block;
}
</style>
