import{by as s}from"./index.81d7fc02.js";const r="Backup",n="Restore",i="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",g={backup:r,restore:n,start_backup:i,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},m={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},f={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},y={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},b={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},k={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},w={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},v={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},S={baseUrl:"BaseUrl",cookie:"Cookie","cookie-tips":"about 15 days valid",root_folder_id:"Root folder id",shareUrl:"ShareUrl",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},C={root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},P={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},x={email:"Email",password:"Password"},R={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},A={password:"Password",root_folder_id:"Root folder id",username:"Username"},D={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},U={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},z={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},T={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},O={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},L={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id"},F={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},j={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},M={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},B={bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},N={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},E={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},V={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},G={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Aliyundrive:"Aliyundrive",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",USS:"USS",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},I={"115 Cloud":{cookie:"Cookie",qrcode_token:"Qrcode token",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},Aliyundrive:m,AliyundriveShare:f,BaiduNetdisk:y,BaiduPhoto:b,FTP:k,GoogleDrive:w,GooglePhoto:v,Lanzou:S,Local:C,MediaTrack:P,Mega_nz:x,Onedrive:R,PikPak:A,PikPakShare:D,Quark:U,S3:z,SFTP:T,SMB:O,Teambition:L,Terabox:F,Thunder:j,ThunderExpert:M,USS:B,Virtual:N,WebDav:E,YandexDisk:V,drivers:G},Y="Refresh",q="Add",W="Edit",H="Save",$="Update",Q="Copied",K="Deleted successfully",J="Saved successfully",X="Updated successfully",Z="Choose",ee="Confirm",oe="Cancel",te="Are you sure you want to delete [{{name}}]?",se="Operations",re="Yes",ne="No",ie="Clear",ae="Select folder",de="Select folder or input path",ce="Disable",le="Enable",_e="OK",pe="Back",ue="Have an account?",he="Go to login",ge="Close",me="Not currently supported",fe="Please enter",ye={refresh:Y,add:q,edit:W,delete:"Delete",save:H,update:$,copied:Q,delete_success:K,save_success:J,update_success:X,choose:Z,confirm:ee,cancel:oe,delete_confirm:te,operations:se,yes:re,no:ne,clear:ie,choose_folder:ae,choose_or_input_path:de,disable:ce,enable:le,ok:_e,back:pe,have_account:ue,go_login:he,close:ge,no_support_now:me,empty_input:fe},be={name:"Name",size:"Size",modified:"Modified"},ke={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},we={list:"List View",grid:"Grid View",image:"Image View"},ve="No images in the current folder",Se="Load more",Ce="No more",Pe="Please input password",xe={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Re={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Ae={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},De={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ue={powered_by:"Powered by AList",manage:"Manage"},ze={search:"Search",no_result:"No result yet"},Te="Failed fetching settings: ",Oe="Failed get current user: ",Le={obj:be,preview:ke,layouts:we,no_images:ve,load_more:Se,no_more:Ce,input_password:Pe,toolbar:xe,upload:Re,local_settings:Ae,package_download:De,footer:Ue,search:ze,fetching_settings_failed:Te,get_current_user_failed:Oe,"Loading storage, please wait":"Loading storage, please wait"},Fe="Search index",je="Current indexes",Me="Build indexes",Be="Rebuild indexes",Ne="Paths to update",Ee="Update indexes",Ve="Object count",Ge="Last done time",Ie="Unknown",Ye="Stop",qe="Clear",We="Error",He={search_index:Fe,current:je,build:Me,rebuild:Be,paths_to_update:Ne,update:Ee,obj_count:Ve,last_done_time:Ge,unknown:Ie,stop:Ye,clear:qe,error:We},$e="Login to the",Qe="Remember me",Ke="Forget password?",Je="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Xe="Clear",Ze="Login",eo="Browse as a guest",oo="Login successfully",to={login_to:$e,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:Qe,forget:Ke,forget_url:Je,clear:Xe,login:Ze,use_guest:eo,success:oo},so={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",github:"Github"},ro="AList Manage",no="You are not admin user, please login with admin account.",io="Logout successfully",ao="Send",co="Receive",lo="Received messages",_o={sidemenu:so,title:ro,not_admin:no,logout_success:io,send:ao,receive:co,received_msgs:lo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},po="Path",uo="Password",ho="Write",go="Hide",mo="Readme",fo="Apply to sub folder",yo="One regular expression per line",bo="Support markdown content or markdown link",ko={path:po,password:uo,write:ho,hide:go,readme:mo,apply_sub:fo,hide_help:yo,readme_help:bo},wo="Allow indexed",vo="Announcement",So="Aria2 secret",Co="Aria2 uri",Po="Audio autoplay",xo="Audio cover",Ro="Audio types",Ao="Customize body",Do="Customize head",Uo="Default page size",zo="External previews",To="Favicon",Oo="Filename char mapping",Lo="Github client id",Fo="Github client secrets",jo="Github login enabled",Mo="Hide files",Bo="Home container",No={hope_container:"Hope container",max_980px:"Max 980px"},Eo="Home icon",Vo="Iframe previews",Go="Ignore paths",Io="Image types",Yo="Index progress",qo="Link expiration",Wo="Logo",Ho="Main color",$o="Ocr api",Qo="Package download",Ko="Pagination type",Jo={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},Xo="Privacy regs",Zo="Proxy ignore headers",et="Proxy types",ot="Search index",tt={bleve:"Bleve",database:"Database",none:"None"},st="Settings layout",rt={list:"List",responsive:"Responsive"},nt="Sign all",it="Site title",at="Text types",dt="Token",ct="Version",lt="Video autoplay",_t="Video types",pt={allow_indexed:wo,announcement:vo,aria2_secret:So,aria2_uri:Co,audio_autoplay:Po,audio_cover:xo,audio_types:Ro,customize_body:Ao,customize_head:Do,default_page_size:Uo,external_previews:zo,favicon:To,filename_char_mapping:Oo,github_client_id:Lo,github_client_secrets:Fo,github_login_enabled:jo,hide_files:Mo,home_container:Bo,home_containers:No,home_icon:Eo,iframe_previews:Vo,ignore_paths:Go,"ignore_paths-tips":"one path per line",image_types:Io,index_progress:Yo,link_expiration:qo,logo:Wo,main_color:Ho,ocr_api:$o,package_download:Qo,pagination_type:Ko,pagination_types:Jo,privacy_regs:Xo,proxy_ignore_headers:Zo,proxy_types:et,search_index:ot,search_indexs:tt,settings_layout:st,settings_layouts:rt,sign_all:nt,site_title:it,text_types:at,token:dt,version:ct,video_autoplay:lt,video_types:_t},ut="Aria2",ht="Aria2 Version:",gt="Set aria2",mt="Copy Token",ft="Reset Token",yt="Reset Token Successfully",bt="Unknown type",kt={aria2:ut,aria2_version:ht,set_aria2:gt,copy_token:mt,reset_token:ft,reset_token_success:yt,unknown_type:bt},wt={start_load_success:"Start loading",load_all:"Reload All",mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},vt={common:wt},St="Download file to local machine",Ct="Transfer downloaded file to corresponding storage",Pt="Upload file to corresponding storage",xt="Copy file from a storage to another storage",Rt="Completed",At="Running",Dt="Pending",Ut="Running",zt="Canceling",Tt="Succeeded",Ot="Canceled",Lt="Errored",Ft={down:St,transfer:Ct,upload:Pt,copy:xt,done:Rt,undone:At,pending:Dt,running:Ut,canceling:zt,succeeded:Tt,canceled:Ot,errored:Lt},jt={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},Mt="Username",Bt="Password",Nt="Base path",Et="Role",Vt="Permission",Gt="Update Profile",It="Update profile successfully, please re-login.",Yt="Change Username",qt="Change Password",Wt="Enable 2FA",Ht="Scan the QR code to save the secret key",$t="Input the code of your 2FA app",Qt="Verify",Kt="So you cannot modify anything in the manage page.",Jt="Github Login",Xt="Connect Github",Zt="Disconnect Github",es={permissions:jt,username:Mt,password:Bt,base_path:Nt,role:Et,permission:Vt,update_profile:Gt,update_profile_success:It,change_username:Yt,change_password:qt,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:Wt,"2fa_already_enabled":"2FA is already enabled",scan_qr:Ht,input_code:$t,verify:Qt,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Kt,github_login:Jt,connect_github:Xt,disconnect_github:Zt},o=Object.assign({"./br.json":g,"./drivers.json":I,"./global.json":ye,"./home.json":Le,"./index.json":s,"./indexes.json":He,"./login.json":to,"./manage.json":_o,"./metas.json":ko,"./settings.json":pt,"./settings_other.json":kt,"./storages.json":vt,"./tasks.json":Ft,"./users.json":es}),os={};for(const e in o){const t=e.split("/")[1].split(".")[0];os[t]=o[e]}export{os as default};
