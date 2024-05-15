<? $styleVersion = 0 ?>
<link rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/cv.css?v=<?= $styleVersion ?>" type="text/css">
<link id="cv-color-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/colors/<?php echo $color_active; ?>.css?v=<?= $styleVersion ?>" type="text/css">
<link id="cv-font" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/fonts/<?php echo $font_active; ?>.css?v=<?= $styleVersion ?>" type="text/css">
<link id="cv-font-size" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-size/<?php echo $font_size_active; ?>.css?v=<?= $styleVersion ?>" type="text/css">
<link id="cv-cpacing-css" rel="stylesheet" href="upload/cv/<?php echo $item->alias; ?>/css/font-spacing/<?php echo $font_spacing_active; ?>.css?v=<?= $styleVersion ?>" type="text/css">
<div id="page-cv">
    <div id="cv-title" class="non-printable" contenteditable="true" cvo-validatable="true" cvo-placeholder="<?php echo $holder_title_cv; ?>"><?php echo $cv_title; ?></div>
    <div id="form-cv">
        <div id="cv-top">
            <div id="cvo-profile">
                <div class="box-01">
                    <div class="anh">
                        <div id="cvo-profile-avatar-wraper">
                            <div class="wimg">
                                <img id="cvo-profile-avatar" cvo-form-field="true" src="<?php echo $avatar; ?>">
                            </div>
                            <div class="fake_img"></div>
                        </div>
                    </div>
                   
                    <div class="ifo">
                        <div class="chu">
                            <h1><div id="cv-profile-fullname" cvo-placeholder="<?php echo $holder_name; ?>" contenteditable="true"><?php echo $fullname; ?></div></h1>
                            <div class="clr"></div>
                            <h2><span id="cv-profile-job" contenteditable="true" cvo-placeholder="<?php echo $holder_job; ?>"><?php echo $position; ?></span></h2>
                            <div class="clr"></div>
                        </div>
                    </div>
                    <div id="box-hvt">
                        <!--php UTVT  -->
                        <?php
                        if ($lang == 'vi') {
                            $ut = "Ứng tuyển vị trí:";
                            $ft = "Xin cảm ơn đã dành thời gian đọc cv của tôi !";
                        } else if ($lang == 'en') {
                            $ut = "Apply for position:";
                            $ft = "Thanks for your time !!";
                        } else if ($lang == 'jp') {
                            $ut = "応募する：";
                            $ft = "御時間ありがとうございます ！！！";
                        } else if ($lang == 'cn') {
                            $ut = "申请职位：";
                            $ft = "谢谢你的时间 ！！！";
                        } else if ($lang == 'kr') {
                            $ut = "직위 신청 :";
                            $ft = "시간 내 줘서 고마워 !!!";
                        }
                        ?>
                        <!-- end UTVT -->

                        <?php
                        for ($i = 1; $i <= count($menu_html); $i++) {
                            $m = $menu_html[$i];
                            if ($m['type'] == "profile") {
                                echo '<div id="' . $m['id'] . '" class="' . $m['class'] . '"';
                                if ($m['status'] == 'hide') {
                                    echo ' style ="display:none"';
                                }
                                echo '>';
                        ?>
                                <div id="prof">
                                    <div class="ic2">
                                        <div class="icf"><i class="fa"></i></div>
                                        <div class="icoweb"><span id="cv-profile-sex" cvo-placeholder="<?php echo $holder_sex; ?>" contenteditable="true"><?php echo $m['content']->sex; ?></span></div>
                                    </div>
                                    <div class="ic1">
                                        <div class="icf"><i class="fa"></i></div>
                                        <div class="icoweb"><span id="cv-profile-birthday" cvo-placeholder="<?php echo $holder_birthday; ?>" contenteditable="true"><?php echo $m['content']->birthday; ?></span></div>
                                    </div>
                                    
                                    <div class="ic3">
                                        <div class="icf"><i class="fa"></i></div>
                                        <div class="icoweb"><span id="cv-profile-phone" cvo-placeholder="<?php echo $holder_phone; ?>" contenteditable="true"><?php echo $m['content']->phone; ?></span></div>
                                    </div>
                                    <div class="ic4">
                                        <div class="icf"><i class="fa"></i></div>
                                        <div class="icoweb"><span id="cv-profile-email" cvo-placeholder="<?php echo $holder_email; ?>" contenteditable="true"><?php if (isset($email)) {
                                                                                                                                                                    echo $email;
                                                                                                                                                                } else {
                                                                                                                                                                    echo $m['content']->email;
                                                                                                                                                                } ?></span></div>
                                    </div>
                                    <div class="ic5">
                                        <div class="icf"><i class="fa"></i></div>
                                        <div class="icoweb"><span id="cv-profile-address" cvo-placeholder="<?php echo $holder_address; ?>" contenteditable="true"><?php echo $m['content']->address; ?></span></div>
                                    </div>

                                    <div class="clr"></div>
                                </div>
                        <?php }
                        } ?>
                        <!-- add div -->
                    </div>
                    
                    <div class="clr"></div>
                </div>
                
            </div>
        </div>
    </div>


    <div class="all">

        <div id="cv-main">
            <div id="cv-right">
                <div class="ir">
                    <div id="sortable">
                        <?php
                        if (!empty($menu_html)) {
                            for ($i = 1; $i <= count($menu_html); $i++) {
                                $m = $menu_html[$i];
                                echo '<div id="' . $m['id'] . '" class="' . $m['class'] . '"';
                                if ($m['status'] == 'hide') {
                                    echo ' style ="display:none"';
                                }
                                echo '>';
                        ?>
                                <?php if ($m['type'] == "profile") { ?>
                                    <?php echo $controls; ?>
                                    <?php echo $controls; ?>

                                    <!-- <div class="ifoic"></div> -->
                                    <!-- <div class="tt-box<?php echo $i ?>">
                                                                <div class="cumicc<?php echo $i ?>"></div>
                                                                <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></div></div> -->


                                <?php } else if ($m['type'] == "skill") { ?>
                                    <?php echo $controls; ?>
                                    <div class="ski">
                                        <div class="skic"></div>
                                        <div class="cumicc<?php echo $i ?>"></div>
                                        <div id="boxtitle"><div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></div></div>
                                    </div>
                                    <div class="exp content-edit skill">
                                        <?php foreach ($m['content'] as $k) { ?>
                                            <div class="ctbx">
                                                <div class="fieldgroup_controls">
                                                    <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
                                                    <div class="edit js-edit-content"> <?php echo $holder_tool_edit; ?></div>
                                                    <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
                                                </div>
                                                <p class="skill-name" cv-form-field="true" contenteditable="true"><?php echo $k->name; ?></p>
                                                <div class="bar-exp">
                                                    <div style="width: <?php echo $k->exp . '%'; ?>"></div>
                                                </div>
                                                <div class="bar-value-exp"><input min="0" max="100" type="text" value="<?php echo $k->exp; ?>"></div>
                                                <div class="exp-fake"></div>
                                            </div>
                                        <?php } ?>
                                        <div class="clr"></div>
                                    </div>
                                <?php } else { ?>
                                    <?php echo $controls; ?>
                                    <div class="cum">
                                        <div class="cumicc<?php echo $i ?>"></div>
                                        <div id="boxtitle"><div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="<?php echo $holder_box_title; ?>" class="box-title"><?php echo $m['title']; ?></div></div>
                                    </div>
                                    <div class="ct_bo">
                                        <div class="ct_box">
                                            <div class="box-content" cvo-placeholder="<?php echo $holder_box_content; ?>" contenteditable="true">
                                                <?php echo $m['content']; ?>
                                            </div>
                                        </div>
                                    </div>
                        <?php }
                                echo '</div>';
                            }
                        } ?>
                    </div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
        <div id="cv-content">

            <div class="ir" id="sort_block">
                <?php if (!empty($block_html)) {
                    for ($i = 1; $i <= count($block_html); $i++) {
                        $block = $block_html[$i];
                ?>
                        <div id="<?php echo $block['id']; ?>" class="cvo-block" <?php if ($block['status'] == 'hide') {
                                                                                    echo ' style="display:none"';
                                                                                } ?>>
                            <?php echo $controls; ?>


                            <div class="head">

                                <div class="icright<?php echo $i ?>"></div>
                                <div id="blocktitle"><div id="cvo-experience-blocktitle" class="block-title" cvo-placeholder="<?php echo $holder_block_title; ?>" contenteditable="true"><?php echo $block['title']; ?></div></div>
                            </div>

                            <div id="experience-table">
                                <?php
                                $j = 0;
                                foreach ($block['content'] as $bl) {
                                    $j++;
                                    echo '<div id="exp' . $j . '" class="ctbx experience">';
                                ?>
                                    <div class="fieldgroup_controls">
                                        <div class="clone"><i class="fa fa-plus"></i> <?php echo $holder_tool_add; ?></div>
                                        <div class="remove"><i class="fa fa-minus"></i> <?php echo $holder_tool_del; ?></div>
                                    </div>
                                    <?php if ($bl->title != '') { ?>
                                        <h3>
                                            <div class="exp-title" contenteditable="true" cvo-placeholder="<?php echo $holder_block_cp_name; ?>"><?php echo $bl->title; ?></div>
                                            <?php if ($bl->date != '') { ?>
                                                <div class="exp-date" contenteditable="true" cvo-placeholder="<?php echo $holder_block_time; ?>"><?php echo $bl->date; ?></div>
                                            <?php } ?>
                                        </h3>
                                    <?php } ?>
                                    <?php if ($bl->subtitle != '') { ?>
                                        <p class="h3"><span class="exp-subtitle" cvo-placeholder="<?php echo $holder_block_job; ?>" contenteditable="true"><?php echo $bl->subtitle; ?></span>
                                        </p>
                                    <?php } ?>

                                    <div class="exp-content" contenteditable="true" cvo-placeholder="<?php echo $holder_block_job_info; ?>">
                                        <?php echo $bl->content; ?>
                                    </div>
                                <?php echo '</div>';
                                } ?>
                            </div>
                        </div>
                <?php }
                } ?>
            </div>
        </div>
        <div class="clr"></div>
    </div>


    <div class="footer">
        <div class="watermark">© Timviec365.vn</div>
    </div>
</div>
</div>